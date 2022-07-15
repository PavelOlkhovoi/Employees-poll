import { RECEIVE_QUESTIONS, SAVE_ANSWER } from "../actions/questions";

const questions = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        default:
            return state
    }
}

export default questions;