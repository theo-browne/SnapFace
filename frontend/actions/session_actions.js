import * as APIUtil from "../util/session_util";

export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const LOGIN_USER = "LOGIN_USER"



export const setUser = user => ({
    type: LOGIN_USER,
    user
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const createUser = (user) => dispatch => {
    return APIUtil.createUser(user).then((user) => dispatch(setUser(user)), (errors) => dispatch(receiveSessionErrors(errors)))
}

export const loginUser = (user) => dispatch => {
    return APIUtil.login(user).then((user) => dispatch(setUser(user)), (errors) => dispatch(receiveSessionErrors(errors)))
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => dispatch(logoutUser()))
}

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})