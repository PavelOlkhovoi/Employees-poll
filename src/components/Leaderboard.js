import { connect } from "react-redux";

const Leaderboard = ({scores}) => {
    return (
        <div className="container">
            <h1>Leaderboard</h1>
            <table>
                <tr>
                    <th>User name</th>
                    <th>Answered</th>
                    <th>Created</th>
                    <th>Total</th>
                </tr>
            {
                scores.map(user => <tr>
                    <th>{user.name}</th>
                    <th>{user.answers}</th>
                    <th>{user.created}</th>
                    <th>{user.total} </th>
                </tr>)
            }
            </table>
        </div>
    )
}

const mapStateToProps = ({users}) => {
    console.log('LeaderBoard')
    const scores = Object.keys(users).map( id => {
        let userAnswer = Object.keys(users[id].answers)
        return { 
            id: id,
            name: users[id].name,
            answers: userAnswer.length,
            created: users[id].questions.length,
            total: [...userAnswer].concat(users[id].questions).length,
        }
    }).sort((a, b) => b.total - a.total)



    console.log(scores)
    return {
        scores
    }
}

export default connect(mapStateToProps)(Leaderboard);