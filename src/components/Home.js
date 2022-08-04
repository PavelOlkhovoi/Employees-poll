import { connect } from "react-redux";
import Polls from "./polls/Polls";

const Home = ({authed}) => {

    return (
        <div>
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