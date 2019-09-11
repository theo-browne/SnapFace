import * as ApiCommentUtils from '../util/comment_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const createComment = comment => dispatch => {
    return ApiCommentUtils.createComment(comment).then(comment => dispatch(createComment(comment)))
}