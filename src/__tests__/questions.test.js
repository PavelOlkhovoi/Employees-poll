import { SAVE_ANSWER_POLL, RECEIVE_QUESTIONS } from "../actions/questions";
import {_saveQuestionAnswer as saveAnswer} from '../utils/_DATA'

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


describe("The poll's reducer saves new answer to apropriate slice of state", ()=> {
    it('If a new answer ubdates the state', ()=> {
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
        // TODO: 1. Add to votes the new UID responder ->
        // OptionOne: [] or OptionTwo []
        // Payload: 1. pid - the poll ID, option 2. uid 
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
})