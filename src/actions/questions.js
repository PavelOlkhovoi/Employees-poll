import {_saveQuestionAnswer as saveAnswer} from '../utils/_DATA'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_ANSWER_POLL = "SAVE_ANSWER_"

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})


// TODO: Check deep this questions
const saveAnswerToStore = (poll) => ({
    type: SAVE_ANSWER,
    pollId: poll.id,
    answer: poll.answer,
    uswe: poll.authed,
})

// Send data and check result
export const handleSaveAnswer = (poll) => {
    return (dispatch) => {
        return saveAnswer(poll).then(res => {
            dispatch(saveAnswerToStore(poll))
        }).catch(error => {
            console.log('Unknow error. The answer not save.')
        })
    }
}

export default receiveQuestions;