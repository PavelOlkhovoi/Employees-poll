import { useLocation, Navigate } from "react-router-dom"
import { connect } from "react-redux"


const Checkauth = ({ children, authed }) => {
    const location = useLocation()
    // Use data from Redux

    const fromPage = location.pathname

    console.log(authed)

    if(!authed){
        return <Navigate to={'auth'} state={{from: fromPage}} />
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


