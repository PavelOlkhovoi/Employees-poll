export const RECEIVES_USER = 'RECEIVES_USER'

export const recieveUsers = (users) => ({
    type: RECEIVES_USER,
    users,
})