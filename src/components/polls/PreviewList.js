import PreviewQuestion from "./PreviewQuestion"

const PreviewList = ({polls, questions}) => {

    return (
        <ul>
        {
            polls.map(id => <li key={id}><PreviewQuestion question={questions[id]}/></li>)
        }
        </ul>
    )
}


export default PreviewList