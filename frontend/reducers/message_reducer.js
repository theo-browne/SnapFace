import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
// import { RECEIVE_USER } from '../actions/user_actions'

const messageReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_MESSAGES:
            Object.values(action.messages).forEach(message => {
                newState[message.id] = message
            })
            return newState
        case RECEIVE_MESSAGE: 
            newState[action.message.id] = action.message
            return newState
        default:
            return state;
    }
}

export default messageReducer;