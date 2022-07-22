import { Link, NavLink } from "react-router-dom";


const NavMenu = ()=> {
    return (
        <header className="container">
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <NavLink to="leaderboard" className="nav-link">Leaderboard</NavLink>
                <span className="nav-link">UserName</span>
                <Link className="nav-link" to="auth">Login</Link>
                <Link className="nav-link" to="create">Create new poll</Link>
                <hr/>
            </nav>
        </header>
    )
}

export default NavMenu;