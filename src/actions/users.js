export const ADD_USER_POLL = "ADD_USER_POLL"

export const RECEIVES_USER = 'RECEIVES_USER'
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER'

export const recieveUsers = (users) => ({
    type: RECEIVES_USER,
    users,
})

export const saveUserAnswer = (answer) => ({
    type: SAVE_ANSWER_USER,
    uid: answer.uid,
    pollId: answer.pid,
    answer,
})

export const saveUserPoll = (poll) => ({
    type: ADD_USER_POLL,
    uid: poll.author,
    pid: poll.id,
})
