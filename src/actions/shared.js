import { _getUsers as getUsers, _getQuestions as getQuestions } from '../utils/_DATA'
import { recieveUsers } from './users'
import setAuthedUser from './authed'
import receiveQuestions from './questions'

const initialData = () => {
    return (dispatch) => {
        return Promise.all([
            getUsers(), 
            getQuestions()
        ]).then(([users, questions]) => {
            dispatch(recieveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser())
        })
    }
}


export default initialData;