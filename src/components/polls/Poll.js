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

const Poll = ({poll, answerStatus, authed, dispatch}) => {

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
    console.log(answer)
    return (
        <div className="container">
            <span className="info">{poll.author}</span>
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
        </div>
    )
}

const mapStateToProps = ({questions, authed, users }, props) => {
    const {id} = props.router.params
    const poll = questions[id]
    const user = users[authed.status]
    const answerStatus = !user.answers[id] ? null : user.answers[id]
    console.log(answerStatus)
    return {
        poll,
        answerStatus,
        authed,
    }
}

export default withRouter(connect(mapStateToProps)(Poll));