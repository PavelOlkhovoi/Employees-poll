import { 
    _getUsers as getUsers, 
    _getQuestions as getQuestions,
    _saveQuestionAnswer as saveAnswer,
} from '../utils/_DATA'
import { recieveUsers } from './users'
import setAuthedUser from './authed'
import receiveQuestions from './questions'
// TODO: clean exports from questions actions
import { saveAnswerToStore } from './questions'
import { saveUserAnswer } from './users'
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

// Send data and check result
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




export default initialData;