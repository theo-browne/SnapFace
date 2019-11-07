import * as ApiCommentUtils from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})
export const removeComment = comment => ({
    type: REMOVE_COMMENT, 
    comment
})

export const removeComments = postId => ({
    type: REMOVE_COMMENTS,
    postId
})

/**
* Thunk action used to send a comment post request
* @param {object} comment - The comment object to be sent in the post request
*/

export const createComment = comment => dispatch => {
    return ApiCommentUtils.createComment(comment).then(comment => dispatch(receiveComment(comment)))
}

/**
* Thunk action used to request comments for a paticular post
* @param {number} postId - The id of the post who's comments are being requested
* @param {number} page - The page number indicating which comments should be returned based on which comments have 
already been recieved
*/

export const fetchComments = (postId, page) => dispatch => {
    return ApiCommentUtils.fetchComments(postId, page).then(comments => dispatch(receiveComments(comments)))
}

/**
* Thunk action used to send a comment patch request to update a users comment
* @param {object} comment - The comment object to be sent in the patch request
*/

export const updateComment = comment => dispatch => {
    return ApiCommentUtils.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
}

/**
* Thunk action used to send a comment delete request to delete a users comment
* @param {number} commentId - The id of the comment that should be deleted 
*/

export const deleteComment = commentId => dispatch => {
    return ApiCommentUtils.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
}

/**
* Thunk action used to send a get request for a paticular comment
* @param {number} id - The id of the comment that should be fetched
*/

export const fetchComment = id => dispatch => {
    return ApiCommentUtils.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
}