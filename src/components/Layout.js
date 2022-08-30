import { NavLink, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import LoadingBar from 'react-redux-loading-bar'
import { connect } from "react-redux";

const Layout = ({loading}) => {
    return (
        <>
        <div className="App">
            <LoadingBar />
            <NavMenu />
        </div>
       {loading ? null : (
         <div className="container">
            <Outlet />
        </div>
       )}
      </>
    )
}

const mapStateToProps = ({questions}) => ({
    loading: Object.keys(questions).length === 0
})

export default connect(mapStateToProps)(Layout)