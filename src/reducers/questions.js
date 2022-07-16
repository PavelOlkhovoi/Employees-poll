import { RECEIVE_QUESTIONS, SAVE_ANSWER_POLL } from "../actions/questions";

const questions = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        case SAVE_ANSWER_POLL:
            return {
                ...state,
                [action.pid]: {
                    ...state[action.pid],
                    [action.option]: {
                        ...state[action.pid][action.option],
                        votes: [...state[action.pid][action.option].votes, action.uid]
                    }
                }
            }
        default:
            return state
    }
}

export default questions;