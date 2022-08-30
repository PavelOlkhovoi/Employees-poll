import { 
    _getUsers as getUsers, 
    _getQuestions as getQuestions,
    _saveQuestionAnswer as saveAnswer,
    _saveQuestion as saveQuestion
} from '../utils/_DATA'
import { recieveUsers } from './users'
import setAuthedUser from './authed'
import receiveQuestions from './questions'
import { saveAnswerToStore, addNewPoll } from './questions'
import { saveUserAnswer, saveUserPoll } from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const initialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            getUsers(), 
            getQuestions()
        ]).then(([users, questions]) => {
            dispatch(recieveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser())
            dispatch(hideLoading())
        })
    }
}

export const handleSaveAnswer = (answer) => {
    const dateToDB = {
        authedUser: answer.uid,
        qid: answer.pid,
        answer: answer.option,
    }
    return (dispatch) => {
        return saveAnswer(dateToDB).then(res => {
            dispatch(saveAnswerToStore(answer))
            dispatch(saveUserAnswer(answer))
        }).catch(error => {
            console.log('Unknow error. The answer not save.')
        })
    }
}

export const handleAddPoll = (poll) => {
    const dataToDB = {
        author: poll.author,
        optionOneText: poll.optionOneText,
        optionTwoText: poll.optionTwoText,
    }

    return (dispatch) => {
        return saveQuestion(dataToDB).then(res => {
            // Save new quastion to store
            dispatch(addNewPoll(res))
            // Add id the question to the author
            dispatch(saveUserPoll(res))
        }).catch(error => {
            console.log(error)
        })
    }
}




export default initialData;