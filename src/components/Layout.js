import { NavLink, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import LoadingBar from 'react-redux-loading-bar'

const Layout = () => {
    return (
        <>
        <div className="App">
            <LoadingBar />
            <NavMenu />
        </div>
        <div className="container">
            <Outlet />
        </div>
      </>
    )
}

export default Layout