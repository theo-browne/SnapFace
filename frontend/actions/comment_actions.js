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

export const createComment = comment => dispatch => {
    return ApiCommentUtils.createComment(comment).then(comment => dispatch(receiveComment(comment)))
}

export const fetchComments = (postId, page) => dispatch => {
    return ApiCommentUtils.fetchComments(postId, page).then(comments => dispatch(receiveComments(comments)))
}

export const updateComment = comment => dispatch => {
    return ApiCommentUtils.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {
    return ApiCommentUtils.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
}