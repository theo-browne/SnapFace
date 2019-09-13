import { SET_COMMENT } from '../actions/ui_actions'

const uiReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case SET_COMMENT:
            newState["currentComment"] = action.comment
            return newState;
        default:
            return state;
    }
}

export default uiReducer;