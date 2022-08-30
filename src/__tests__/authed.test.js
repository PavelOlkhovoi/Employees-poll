import authedReducer from "../reducers/authed";
import { SET_AUTHED_USER } from "../actions/authed";

describe('Authed reducer must set status using the id of the user', ()=> {
    it('Status mast to be exactly like the value of id', ()=> {
        let obj = {
            type: SET_AUTHED_USER,
            id: "test"
        }
        let result = authedReducer(null, obj)
        expect(result).toMatchObject({status: 'test'});
    })
})