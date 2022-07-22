import { useLocation, Navigate } from "react-router-dom"
import { connect } from "react-redux"


const Checkauth = ({ children, authed }) => {
    const location = useLocation()
    const fromPage = location.pathname

    if(!authed){
        return <Navigate to={'/auth'} state={{from: fromPage}} />
    }

    return (
        <>
        { children }
        </>
    )
}

const mapStateToProps = ({ authed }) => ({
    authed: authed.status
})

export default connect(mapStateToProps)(Checkauth)


