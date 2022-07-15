import { SAVE_ANSWER_USER, RECEIVES_USER } from "../actions/users"

describe("Change the user state in the Redux store", () => {

    let users = {
        sarahedo: {
          id: 'sarahedo',
          password:'password123',
          name: 'Sarah Edo',
          avatarURL: null,
          answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
          },
          questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        tylermcginnis: {
          id: 'tylermcginnis',
          password:'abc321',
          name: 'Tyler McGinnis',
          avatarURL: null,
          answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
          },
          questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        }
      }

    // Payload 1. Uid = user ID, 2 pollId, 3 = answer
    const usersReducer = (state = users, action) => {
        switch (action.type) {
            case RECEIVES_USER:
                return {...state, ...action.users}
            case SAVE_ANSWER_USER:
                return {
                    ...state,
                    //id users
                    [action.uid]: {
                        ...state[action.uid],
                        answers: {
                            //Id question
                            ...state[action.uid].answers,
                            [action.pollId]: action.answer
                        }
                    }
                }
            default:
                return state    
        }
    }

    it("Test Test", ()=> {
        const responder = {
            type: SAVE_ANSWER_USER,
            uid: 'tylermcginnis',
            pollId: '999999999',
            answer: 'optionTest'
        }
        const result = usersReducer(users, responder)

        expect(result[responder.uid].answers[responder.pollId]).toBe('optionTest')

    })
    // it("Add new answer to the certan user", ()=> {

    // })
})