import * as ApiCommentUtils from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const createComment = comment => dispatch => {
    return ApiCommentUtils.createComment(comment).then(comment => dispatch(receiveComment(comment)))
}

export const fetchComments = postId => dispatch => {
    return ApiCommentUtils.fetchComments(postId).then(comments => dispatch(receiveComments(comments)))
}