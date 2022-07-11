import { _getUsers as getUsers, _getQuestions as getQuestions } from '../utils/_DATA'
import { recieveUsers } from './users'
import setAuthedUser from './authed'
import receiveQuestions from './questions'
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


export default initialData;