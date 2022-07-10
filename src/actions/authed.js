export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CHANGE_AUTHED_USER = 'CHANGE_AUTHED_USER'

const setAuthedUser = (id = null) => ({
    type: SET_AUTHED_USER,
    id,
})

export const changeAuthedUser = (id) => ({
    type: CHANGE_AUTHED_USER,
    id,
}) 

export default setAuthedUser;