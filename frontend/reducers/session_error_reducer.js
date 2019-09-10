import { RECEIVE_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";


const sesssionErrorsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            newState[action.errors.responseJSON.type] = action.errors.responseJSON.errors
            return newState
        default:
            return state;
    }
}

export default sesssionErrorsReducer;