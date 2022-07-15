import { Link } from "react-router-dom";

const NavMenu = ()=> {
    return (
        <header className="container">
            <nav>
                <Link to="/">Home</Link>
                <span>Leaderboard</span>
                <span>UserName</span>
                <Link className="btn" to="auth">Logout</Link>
                <hr/>
            </nav>
        </header>
    )
}

export default NavMenu;