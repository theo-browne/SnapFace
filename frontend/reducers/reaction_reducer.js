import { RECEIVE_REACTION } from '../actions/reaction_actions'

const reactionReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_REACTION:
                newState[action.reaction.id] = action.reaction
            return newState;
        default:
            return state;
    }
}

export default reactionReducer;