import { Link } from "react-router-dom";

const NavMenu = ()=> {
    return (
        <header className="container">
            <nav>
                <Link to="/">Home</Link>
                <span>Leaderboard</span>
                <span>UserName</span>
                <Link className="btn" to="auth">Login</Link>
                <Link className="btn" to="create">Create new poll</Link>
                <hr/>
            </nav>
        </header>
    )
}

export default NavMenu;