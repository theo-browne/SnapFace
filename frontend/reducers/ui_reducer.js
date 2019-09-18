import { SET_COMMENT, UPDATE_UNREAD, CURRENT_MESSAGE } from '../actions/ui_actions'

const uiReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case SET_COMMENT:
            newState["currentComment"] = action.comment
            return newState;
        case UPDATE_UNREAD:
            if (newState['unread']) {
            newState['unread'] += 1
            } else {
                newState['unread'] = 1
            }
            return newState
        case CURRENT_MESSAGE:
            newState['currentMessage'] = action.friendshipId
            return newState
        default:
            return state;
    }
}

export default uiReducer;