import { RECEIVE_USER } from "../actions/session_actions";
import { RECEIVE_USERS, REMOVE_USERS } from '../actions/friend_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_USERS:
            return action.users
        case REMOVE_USERS:
            return {}
        default:
            return state;
    }
}

export default usersReducer;