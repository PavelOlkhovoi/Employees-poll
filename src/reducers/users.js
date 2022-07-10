import { RECEIVES_USER } from "../actions/users";

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVES_USER:
            return {...state, ...action.users}
        default:
            return state    
    }
}

export default usersReducer;