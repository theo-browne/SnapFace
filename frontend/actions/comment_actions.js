import * as ApiCommentUtils from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'

/**
* Action used to add a single comment to the redux store
* @param {object} comments - The comment that will be added
*/
export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

/**
* Action used to add a batch of comments to the redux store
* @param {object} comments - The response from the API which includes
*/
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

/**
* Action used to clear the comments for a paticular post from the redux store
* @param {object} comment - The comment that will be removed 
*/

export const removeComment = comment => ({
    type: REMOVE_COMMENT, 
    comment
})

/**
* Action used to clear the comments for a paticular post from the redux store
* @param {number} postId - The post who's comments will be removed
*/

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