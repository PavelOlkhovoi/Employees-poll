import { SAVE_ANSWER_POLL, RECEIVE_QUESTIONS, ADD_POLL } from "../actions/questions";
import {_saveQuestionAnswer as saveAnswer} from '../utils/_DATA'

console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPP", ADD_POLL)

describe('The answer of certan poll should be send to API and will be saved in the databse.', ()=> {
    it('Send the answer without errors. Respond true', async ()=> {
        //*Parameters*: Object = authedUser | string, qid | string, and answer | string

        const answer = {authedUser: 'tylermcginnis', qid: 'am8ehyc8byjqgar0jgpub9', answer: 'optionTwo'};

        const response = await (saveAnswer(answer))
        expect(response).toEqual(true)

    })

    it('Get error if we send not all object properties', async ()=> {
        const missedAnswer = {authedUser: 'tylermcginnis', qid: 'am8ehyc8byjqgar0jgpub9'};
        await expect(saveAnswer(missedAnswer)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'Build our new application with Javascript',
      },
      optionTwo: {
        votes: [],
        text: 'Build our new application with Typescript'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'mtsamis',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'hire more frontend developers',
      },
      optionTwo: {
        votes: ['mtsamis', 'sarahedo'],
        text: 'hire more backend developers'
      }
    },
}

const test = {
    
}


describe("The poll's reducer saves new answer to apropriate slice of state", ()=> {
    it('If a new answer ubdates the state', ()=> {

        const questionsReducer = (state = {}, action) => {
            switch (action.type) {
                case RECEIVE_QUESTIONS:
                    return {...state, ...action.questions}
                case SAVE_ANSWER_POLL:
                    const newAnswer = state[action.pid][action.option].votes
                return {
                    ...state,
                    [action.pid]: {
                        ...state[action.pid],
                        [action.option]: {
                            ...state[action.pid][action.option],
                            votes: [...state[action.pid][action.option].votes, action.uid]
                        }
                    }
                }
                default:
                    return state
            }
        }

        const payload = {
            type: SAVE_ANSWER_POLL,
            pid: "6ni6ok3ym7mf1p33lnez",
            uid: "tylermcginnis",
            option: "optionOne"
        }

        const res = questionsReducer(questions, payload);

        expect(res[payload.pid][payload.option].votes[0]).toBe('tylermcginnis')
    })

    it("Add new poll to store with reducer", ()=> {

         const newPoll =  {
            author: "tylermcginnis",
            id: "4j1svpgxg2gsd2eyle1vy7",
            optionOne: {
                text: "Option 1",
                votes: [],
            },
            optionTwo: {
                text: "Option 2",
                votes: [],
            },
            timestamp: 1657996165199,
        }

        const createPoll = {
            type: ADD_POLL,
            poll: newPoll
        }

        const questionsReducer = (state = {}, action) => {
            switch (action.type) {
                case RECEIVE_QUESTIONS:
                    return {...state, ...action.questions}
                case ADD_POLL:
                    return {
                        ...state,
                        [action.poll.id]: action.poll
                    }
                default:
                    return state
            }
        }

        const result = questionsReducer(questions, createPoll)

        expect(result[newPoll.id].author).toBe('tylermcginnis')
    })
})