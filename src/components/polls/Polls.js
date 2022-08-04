import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PreviewQuestion from "./PreviewQuestion";
import Poll from "./Poll";
import PreviewList from "./PreviewList";
import { useState } from "react";
import TargetTitle from "./TargetTitle";


const Polls = ({ questions, answeredId, unAnsweredId }) => {
    const [pollsTest, setPollsTest] = useState(answeredId)
    const [titleActive, setTitleActive] = useState('Answerd')
    
    const showPollsPrevList = (polls, title) => {
        setPollsTest(polls)
        setTitleActive(title)
    }

    return (
        <div className="container">
            <h1>List of polls</h1>
            <div className="polls_cover">
            <TargetTitle 
            show={showPollsPrevList} text="Answerd" polls={answeredId} total={answeredId.length} isActive={titleActive}/> 
            <TargetTitle show={showPollsPrevList} text="Unanswerd" polls={unAnsweredId} total={unAnsweredId.length} isActive={titleActive}/>      
            </div>        
            <PreviewList polls={pollsTest} questions={questions}/>
        </div>
    )
}



const mapStateToProps = ({ questions, users, authed }) => {
    let questionsIds = Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    let unAnsweredId = questionsIds.filter( key => !users[authed.status].answers[key]);
    let answeredId = questionsIds.filter( key => users[authed.status].answers[key]);
    return {
        // questionsIds,
        unAnsweredId,
        questions,
        answeredId,
    }
}

export default connect(mapStateToProps)(Polls);
