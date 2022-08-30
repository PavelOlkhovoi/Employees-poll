import { ADD_POLL } from "../actions/questions"
import { SAVE_ANSWER_USER, RECEIVES_USER } from "../actions/users"

describe("Test different actions which affect the user's part of the state", () => {

    // The array of users from the Redux store
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
            case ADD_POLL:
                return {
                    ...state,
                    [action.uid]: {
                        ...state[action.uid],
                        questions: [
                            ...state[action.uid].questions,
                            action.pid
                        ]
                    }
                }
            default:
                return state    
        }
    }

    it("Add new answer to the user's object answer", ()=> {
        const responder = {
            type: SAVE_ANSWER_USER,
            uid: 'tylermcginnis',
            pollId: '999999999',
            answer: 'optionTest'
        }
        const result = usersReducer(users, 
            )

        expect(result[responder.uid].answers[responder.pollId]).toBe('optionTest')

    })
    it("Add new poll to the certan user", ()=> {
        const creater = {
            type: ADD_POLL,
            uid: 'tylermcginnis',
            pid: '999',
        }

        const result = usersReducer(users, creater)
        expect(result[creater.uid].questions[2]).toBe('999')
    })
})