import { Link, NavLink } from "react-router-dom";

const toggleActive = ({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"


const NavMenu = ()=> {
    return (
        <header className="container">
            <nav>
                <NavLink to="/" className={toggleActive}>Home</NavLink>
                <NavLink to="leaderboard" className={toggleActive}>Leaderboard</NavLink>
                <span className="nav-link">UserName</span>
                <NavLink className={toggleActive} to="auth">Login</NavLink>
                <NavLink className={toggleActive} to="create">Create new poll</NavLink>
                <hr/>
            </nav>
        </header>
    )
}

export default NavMenu;