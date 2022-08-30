import { connect } from "react-redux";

const Leaderboard = ({scores}) => {
    return (
        <div className="container">
            <h1>Leaderboard</h1>
            <table>
                <thead>
                <tr>
                    <th>User name</th>
                    <th>Answered</th>
                    <th>Created</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
            {
                scores.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.answers}</td>
                    <td>{user.created}</td>
                    <td>{user.total} </td>
                </tr>)
            }
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({users}) => {
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

    return {
        scores
    }
}

export default connect(mapStateToProps)(Leaderboard);