import {_saveQuestion as saveQuestion} from "../utils/_DATA"

describe('Add new poll by user', () => {
    it('Send object with fields: `author`, `optionOneText`, and `optionTwoText` to DB without errors', async ()=> {

        let object = {
            author: 'tylermcginnis',
            optionTwoText: 'Option 2',
            optionOneText: 'Option 1'
        }

        let result = await saveQuestion(object)
        author: "tylermcginnis",
        expect(result.author).toBe('tylermcginnis')
    })
})