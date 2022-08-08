export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CHANGE_AUTHED_USER = 'CHANGE_AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

const setAuthedUser = (id = null) => ({
    type: SET_AUTHED_USER,
    id,
})

export const logOutUser = () => ({
    type: LOGOUT_USER,
})

export const changeAuthedUser = (id) => ({
    type: CHANGE_AUTHED_USER,
    id,
}) 

export default setAuthedUser;