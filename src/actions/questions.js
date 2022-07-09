export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

const receiveQuestions = (questions) => ({
    type: RECEIVE_USERS,
    questions,
})

export default receiveQuestions;