import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState
        case RECEIVE_COMMENTS:
            Object.values(action.comments).forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        default:
            return state;
    }
}

export default commentsReducer;