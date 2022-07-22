import { connect } from "react-redux";

const Leaderboard = ({scores}) => {
    return (
        <div className="container">
            <h1>Leaderboard</h1>
        </div>
    )
}

const mapStateToProps = ({users}) => {
    const scores = Object.keys(users).map( id => {
        let userAnswer = Object.keys(users[id].answers)
        return { [id]: [...userAnswer].concat(users[id].questions).length}
    })

    console.log(scores)
    return {
        scores
    }
}

export default connect(mapStateToProps)(Leaderboard);