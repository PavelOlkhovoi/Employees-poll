import { RECEIVE_USERS } from "../actions/users";

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {...state, users: action.uses}
        default:
            return state    
    }
}

export default usersReducer;