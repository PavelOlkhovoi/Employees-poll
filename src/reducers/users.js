import { RECEIVES_USER, SAVE_ANSWER_USER, ADD_USER_POLL } from "../actions/users";

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
        case ADD_USER_POLL:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    questions: [
                        ...state[action.uid].questions,
                        action.pid
                    ]
                }
            }
        default:
            return state    
    }
}

export default usersReducer;