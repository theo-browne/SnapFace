import { RECEIVE_USERS, REMOVE_USERS } from '../actions/friend_actions'

const searchedUsersReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USERS:
            return action.payload.users || {}
        case REMOVE_USERS:
            return {}
        default:
            return state;
    }
}

export default searchedUsersReducer;