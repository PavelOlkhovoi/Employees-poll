import { RECEIVES_USER, SAVE_ANSWER_USER } from "../actions/users";

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVES_USER:
            return {...state, ...action.users}
        case SAVE_ANSWER_USER:
            return {
                ...state,
                //id users
                [action.uid]: {
                    ...state[action.uid],
                    answers: {
                        //id question
                        ...state[action.uid].answers,
                        [action.pollId]: action.answer
                    }
                }
            }
        default:
            return state    
    }
}

export default usersReducer;