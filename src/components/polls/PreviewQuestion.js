import { Link } from "react-router-dom";

const PreviewQuestion = ({question}) => {
    return (
        <Link to={`/poll/${question.id}`}>{question.author}</Link>
    )
}

export default PreviewQuestion;