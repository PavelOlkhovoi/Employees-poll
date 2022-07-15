import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PreviewQuestion from "./PreviewQuestion";
import Poll from "./Poll";


const Polls = ({ questionsIds, questions, answeredId, notAnsweredId }) => {

    return (
        <div className="container">
            <h1>List of polls</h1>
            <h3>Answerd Polls</h3>
            {
                answeredId.map(id => <li key={id}><PreviewQuestion question={questions[id]}/></li>)
            }
            <h3>Unanswerd Polls</h3>
            {
                notAnsweredId.map(id => <li key={id}><PreviewQuestion question={questions[id]}/></li>)
            }
        </div>
    )
}



const mapStateToProps = ({ questions, users, authed }) => {
    let questionsIds = Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    let notAnsweredId = questionsIds.filter( key => !users[authed.status].answers[key]);
    let answeredId = questionsIds.filter( key => users[authed.status].answers[key]);
    return {
        questionsIds,
        notAnsweredId,
        questions,
        answeredId,
    }
}

export default connect(mapStateToProps)(Polls);
