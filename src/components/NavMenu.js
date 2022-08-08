import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux/es/exports";

const toggleActive = ({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"


const NavMenu = ({authed})=> {
    const user = authed.status
    console.log(authed)
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

                    {
                        user ? <>
                            <span className="nav-link nav-link-name">{user.trim()}</span>
                            <span className="nav-link">Logout</span>
                        </>
                        : <NavLink className={toggleActive} to="auth">Login</NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
      authed: state.authed,
    }
  }


export default connect(mapStateToProps)(NavMenu);