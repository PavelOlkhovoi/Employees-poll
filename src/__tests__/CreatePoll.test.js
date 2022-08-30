import {_saveQuestion as saveQuestion} from "../utils/_DATA"

describe('Save to database brend new poll', () => {
    it('Send object with fields: `author`, `optionOneText`, and `optionTwoText` to DB and get the answer with the correct author', async ()=> {

        let object = {
            author: 'tylermcginnis',
            optionTwoText: 'Option 2',
            optionOneText: 'Option 1'
        }

        let result = await saveQuestion(object)

        expect(result.author).toBe('tylermcginnis')
    })
})