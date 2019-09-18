export const SET_COMMENT = 'SET_COMMENT'
export const UPDATE_UNREAD = 'UPDATE_UNREAD'
export const CURRENT_MESSAGE = 'CURRENT_MESSAGE'

export const setComment = comment => ({
    type: SET_COMMENT,
    comment
})

export const updateUnread = () => ({
    type: UPDATE_UNREAD
})

export const currentMessage = friendshipId => ({
    type: CURRENT_MESSAGE,
    friendshipId
})