import { Link } from "react-router-dom";
import { totalAnswers } from "../../utils/stats";

const PreviewQuestion = ({question}) => {

    return (
        <Link to={`/poll/${question.id}`}>
            <div className="poll-previes">
                Would you rather {question.optionOne.text} or {question.optionOne.text} ?
                <div className="poll-prev-author">Author: {' '}
                    <span className="poll-prev-author-name">
                        {question.author}
                    </span>
                    <div className="poll-prev-votes">{totalAnswers(question)} votes</div>
                </div>
            </div>
        </Link>
    )
}

export default PreviewQuestion;