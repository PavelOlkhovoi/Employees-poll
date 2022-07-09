import { _getUsers as getUsers, _getQuestions as getQuestions } from '../utils/_DATA'
import receiveUsers from './users'

const initialData = () => {
    return (dispatch) => {
        return async () => {
            const users = await getUsers();
            console.log(users)
        }
    }
}

export default initialData;