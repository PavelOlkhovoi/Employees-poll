import { SAVE_ANSWER_POLL, RECEIVE_QUESTIONS, ADD_POLL } from "../actions/questions";
import {_saveQuestionAnswer as saveAnswer} from '../utils/_DATA'


describe('The answer to a certain poll should be sent to API and will be saved in the database.', ()=> {
    it('Send the answer without errors and get true as the answer', async ()=> {

        const answer = {authedUser: 'tylermcginnis', qid: 'am8ehyc8byjqgar0jgpub9', answer: 'optionTwo'};

        const response = await (saveAnswer(answer))
        expect(response).toEqual(true)

    })

    it('Get an error if we send the wrong properties.', async ()=> {
        // qid is the indetificator of question
        const missedAnswer = {authedUser: 'tylermcginnis', qid: 'am8ehyc8byjqgar0jgpub9'};
        await expect(saveAnswer(missedAnswer)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})

// These are questions from the Redux store 
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


describe("Save a new answer and add a brand new Poll to the Redux", ()=> {
    it('The poll reducer saves an answer and adds a new author to the votes array.', ()=> {

        const questionsReducer = (state = {}, action) => {
            switch (action.type) {
                case RECEIVE_QUESTIONS:
                    return {...state, ...action.questions}
                case SAVE_ANSWER_POLL:
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

        // uid is the user id, pid is the poll id  
        const payload = {
            type: SAVE_ANSWER_POLL,
            pid: "6ni6ok3ym7mf1p33lnez",
            uid: "tylermcginnis",
            option: "optionOne"
        }

        const res = questionsReducer(questions, payload);

        expect(res[payload.pid][payload.option].votes[0]).toBe('tylermcginnis')
    })

    it("Add new poll to to the Redux store", ()=> {

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