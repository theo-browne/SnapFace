import * as APIUserUtils from '../util/user_util'
import { setUser } from './session_actions';


export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USERS = "CLEAR_USERS";

export const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
})

export const clearUsers = () => ({
    type: CLEAR_USERS
})

export const fetchUser = (id, page) => dispatch => {
    return APIUserUtils.fetchUser(id, page).then(payload => {
        dispatch(receiveUser(payload))
    })
}

export const updateUser = (data, id) => dispatch => {
    return APIUserUtils.updateUser(data, id).then(user => {
        dispatch(receiveUser(user))
        dispatch(setUser(user.user))
    })
}



