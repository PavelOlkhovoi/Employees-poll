import { connect } from "react-redux";
import Polls from "./polls/Polls";

const Home = ({authed}) => {

    return (
        <div className="container">
            <h1>Hi, users</h1>
            {
                authed.status !== null ? <Polls /> : null
            }
        </div>
    )
}

const mapStateToProps = ({authed}) => {
    return {
        authed
    }
}

export default connect(mapStateToProps)(Home);