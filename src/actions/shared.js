import { _getUsers as getUsers, _getQuestions as getQuestions } from '../utils/_DATA'
import receiveUsers from './users'

const initialData = () => {
    console.log('start')
    return (dispatch) => {
        return () => {
            getUsers().then( users => dispatch(receiveUsers(users))) 
        }
    }
}

export default initialData;