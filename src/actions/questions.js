export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_ANSWER_POLL = "SAVE_ANSWER_POLL"

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})


// TODO: Check deep this questions
export const saveAnswerToStore = (answer) => ({
    type: SAVE_ANSWER_POLL,
    pid: answer.pid,
    uid: answer.uid,
    option: answer.option,
})


export default receiveQuestions;