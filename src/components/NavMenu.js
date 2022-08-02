import { Link, NavLink } from "react-router-dom";

const toggleActive = ({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"


const NavMenu = ()=> {
    return (
        <header>
            <nav>
                <div className="menu-col menu-col__left">
                    <span className="logo">The Polls</span>
                </div>
                <div className="menu-col menu-col__centre">
                <NavLink className={toggleActive} to="create">Create new poll</NavLink>
                </div>

                <div className="menu-col menu-col__right">
                    <NavLink to="/" className={toggleActive}>Home</NavLink>
                    <NavLink to="leaderboard" className={toggleActive}>Leaderboard</NavLink>
                    {/* <span className="nav-link">UserName</span> */}
                    <NavLink className={toggleActive} to="auth">Login</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default NavMenu;