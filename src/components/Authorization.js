import { useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import { changeAuthedUser } from "../actions/authed"
import Button from "./UI/buttons/Button"
import Input from "./UI/inputs/Input"


const Authorization = ({users, dispatch}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation()

    const redirectBack = location.state?.from || "/"





    // JUST FOR TEST
    const showMessage = (e) => {
        console.log('Show button')
    }






    const formHandler = (e) => {
        e.preventDefault()
        for(let user in users){
            const u = users[user]
            if(u.password === password && u.id === name ) {
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
                <Input
                placeholder={"Type user name"}
                onChange={(e)=>setName(e.target.value)}
                name={'login'}
                label={"Name"}
                value={name}
                />

                <Input
                placeholder={"Type your password"}
                label={"Password"}
                name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />

                <div className="error"></div>
                <Button type="submit" onClick={formHandler} disabled={name === "" || password === ""}
                text={'Authorize'}
                />
                {/* <button type="submit" onClick={formHandler} disabled={name === "" || password === ""}>Submut</button> */}
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