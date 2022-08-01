import { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveAnswer } from "../../actions/shared";

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
    console.log(stats)
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
            <span className="info">Autor: { poll.author === authed.status ? <span style={{color: "red"}}>"You"</span> : poll.author} </span>
            <h1>what would you rather?</h1>
            <span className="info">You can answer only once</span>
            <form onSubmit={handleAnswer} >
                <fieldset disabled={answerStatus !== null ? true : false}  className="center-block">
                    <div className="answer">
                        <label htmlFor="optionOne">
                            Question One: {poll.optionOne.text}
                        </label>
                        <input type="radio" name="option" id="optionOne" 
                        checked={answerStatus === "optionOne" ? true : null} 
                        onChange={(e)=> setAnswer('optionOne')}/>
                    </div>
                    <div className="answer">
                        <label htmlFor="optionTwo">
                            Option Two: {poll.optionTwo.text}
                        </label>
                        <input type="radio" 
                        checked={answerStatus === "optionTwo" ? true : null} 
                        name="option" id="optionTwo"
                        onChange={(e)=>setAnswer('optionTwo')} 
                        />
                    </div>
                    <div className="error"></div>
                    <button className="btn" 
                    disabled={answer === ""}>
                        Submit
                    </button>
                </fieldset>
            </form> 
            <hr/>
            <h2>Total answers {stats.total}</h2>
            {/* First variant */}
            <div className="poll-stat-left">
                <h3>Variant one {stats.onePerce}%</h3>
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
                <h3>Variant two { stats.twoPerce }%</h3>
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
    console.log('Poll MapStateToProps')
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