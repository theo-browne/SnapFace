import * as ApiMessageUtil from '../util/message_util'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'


export const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const fetchMessages = (roomId, page) => dispatch => {
    return ApiMessageUtil.fetchMessages(roomId, page).then(messages => dispatch(receiveMessages(messages)))
}