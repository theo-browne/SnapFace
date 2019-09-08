import { RECEIVE_USERS, ADD_FRIEND, REMOVE_FRIENDSHIP } from '../actions/friend_actions';

const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USERS:

            return action.payload.friendships || {}

        case ADD_FRIEND: 
             
            newState[action.friendship.friendId] = action.friendship
            return newState
        case REMOVE_FRIENDSHIP:
            delete newState[action.friendshipId.friendId]
            return newState
        default:
            return state;
    }
}

export default friendshipsReducer;