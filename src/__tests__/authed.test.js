import authedReducer from "../reducers/authed";
import { SET_AUTHED_USER } from "../actions/authed";

describe('Test', ()=> {
    it('Just test', ()=> {
        let obj = {
            type: SET_AUTHED_USER,
            id: "MkKK"
        }
        let rec = authedReducer(null, obj)
        expect(rec).toMatchObject({status: 'MkKK'});
    })
})