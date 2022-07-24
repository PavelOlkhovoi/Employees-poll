import { useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import { changeAuthedUser } from "../actions/authed"


const Authorization = ({users, dispatch}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation()

    const redirectBack = location.state?.from || "/"

    const formHandler = (e) => {
        e.preventDefault()
        for(let user in users){
            const u = users[user]
            if(u.password === password && u.name === name ) {
                dispatch(changeAuthedUser(user))
                setName('')
                setPassword('')
                navigate(redirectBack)
            }
        }
    }
    return (
        <div className="container">
            <h1>Please log in</h1>
            <form>
                <div>
                    <label htmlFor="name">Email</label>
                    <input id="name" type="text" placeholder="Type your email" 
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
                <button type="submit" onClick={formHandler} disabled={name === "" || password === ""}>Submut</button>
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