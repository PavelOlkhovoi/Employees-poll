import { SET_AUTHED_USER, CHANGE_AUTHED_USER } from "../actions/authed";

const authedReducer = (state = {status: null}, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {...state, status: action.id}
        case CHANGE_AUTHED_USER: 
            return {...state, status: action.id}
        default:
            return state
    }
}

export default authedReducer;