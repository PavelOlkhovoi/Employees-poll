import { useState } from "react"
import { connect } from "react-redux"
import { changeAuthedUser } from "../actions/authed"


const Authorization = ({users, dispatch}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const testHandler = (e) => {
        e.preventDefault()
        for(let user in users){
            const u = users[user]
            if(u.password === password && u.name === name ) {
                dispatch(changeAuthedUser(user))
                console.log('True')
            }else {
                console.log('False')
            }
        }
    }
    return (
        <div className="container">
            <h1>Please log in</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Type your email" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="text"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="error"></div>
                <button onClick={testHandler}>Submut</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,

    }
}

export default connect(mapStateToProps)(Authorization);