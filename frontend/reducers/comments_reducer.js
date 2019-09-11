import { RECEIVE_COMMENT } from '../actions/comment_actions'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState
        default:
            return state;
    }
}

export default commentsReducer;