import * as APIUserUtils from '../util/user_util'

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
})

export const fetchUser = id => dispatch => {
    return APIUserUtils.fetchUser(id).then(payload => dispatch(receiveUser(payload)))
}

export const updateUser = (data, id) => dispatch => {
    return APIUserUtils.updateUser(data, id).then(user => dispatch(receiveUser(user)))
}