export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_ANSWER_POLL = "SAVE_ANSWER_POLL"
export const ADD_POLL = "ADD_POLL"

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})


export const saveAnswerToStore = (answer) => ({
    type: SAVE_ANSWER_POLL,
    pid: answer.pid,
    uid: answer.uid,
    option: answer.option,
})


export const addNewPoll = (newPoll) => ({
    type: ADD_POLL,
    poll: newPoll,
})


export default receiveQuestions;