import { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveAnswer } from "../../actions/shared";
import Button from "../UI/buttons/Button";
import PercentDisplay from "../UI/percent/PercentDisplay";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
  };

const Poll = ({poll, answerStatus, authed, dispatch, stats}) => {
    const [answer, setAnswer] = useState('')
    const handleAnswer = (e) => {
        e.preventDefault()
        const answerData = {
            uid: authed.status,
            pid: poll.id,
            option: answer
        }

        dispatch(handleSaveAnswer(answerData))
    }


    return (
        <div className="container">
            <span className="info-autor">Autor: 
            <span className="info-autor-name">
                { poll.author === authed.status ? <span style={{color: "red"}}> You</span> : " " + poll.author}</span> 
            </span>
            <h1>Would you rather?</h1>
            <span className="info">* You can answer only once</span>
            <form onSubmit={handleAnswer} >
                <fieldset disabled={answerStatus !== null ? true : false}  className="center-block">
                    <div className="answer">
                        <label htmlFor="optionOne" className="poll-label">
                            {poll.optionOne.text}
                        </label>
                        <input type="radio" name="option" id="optionOne" 
                        checked={answerStatus === "optionOne" ? true : null} 
                        onChange={(e)=> setAnswer('optionOne')}/>
                    </div>
                    <div className="answer">
                        <label htmlFor="optionTwo" className="poll-label">
                            {poll.optionTwo.text}
                        </label>
                        <input type="radio" 
                        checked={answerStatus === "optionTwo" ? true : null} 
                        name="option" id="optionTwo"
                        onChange={(e)=>setAnswer('optionTwo')} 
                        />
                    </div>
                    <div className="error"></div>
                    <Button
                    disabled={answer === ""}>
                        Submit
                    </Button>
                </fieldset>
            </form> 
            <hr/>
            <h2>Total answers {stats.total}</h2>
            {/* First variant */}
            <div className="poll-stat-left">
                <h3>Variant one {Math.round(stats.onePerce)}%</h3>
                <PercentDisplay percent={Math.round(stats.onePerce)} />
                <ul>
                {
                    stats.oneRes !== 0  ?(
                        stats.oneVotes.map( (user, index) => <li key={index}>{user}</li> )
                    ) : (
                        <span>Not answered yet</span>
                    )
                    
                }
                </ul>
            </div>
            {/* Second variant */}
            <div className="poll-stat-left">
                <h3>Variant two { Math.round(stats.twoPerce)}%</h3>
                <PercentDisplay percent={Math.round(stats.twoPerce)} />
                <ul>
                {
                    stats.twoeRes !== 0 ? (
                        stats.twoVotes.map( (user, index) => <li key={index}>{user}</li> )
                    ) : (
                        <span>Not answered yet</span>
                    )
                    
                }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({ questions, authed, users }, props) => {

    const {id} = props.router.params
    const poll = questions[id]
    const user = users[authed.status]
    const answerStatus = !user.answers[id] ? null : user.answers[id]

    const statistics = (poll) => {
        const {optionOne, optionTwo} = poll

        const oneRes = optionOne.votes.length
        const twoRes = optionTwo.votes.length
        const total = oneRes + twoRes
        const onePerce = oneRes / total * 100 
        const twoPerce = twoRes / total * 100 

        return {
            oneVotes: optionOne.votes,
            twoVotes: optionTwo.votes,
            oneRes,
            onePerce,
            twoPerce,
            twoRes,
            total,
            totalFn() {
                return console.log("This", this)
            }
        }
    }

    const stats = statistics(poll)

    return {
        poll,
        answerStatus,
        authed,
        stats
    }
}

export default withRouter(connect(mapStateToProps)(Poll));