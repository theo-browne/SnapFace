import { RECEIVE_USERS, ADD_FRIEND, REMOVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS , REMOVE_USERS} from '../actions/friend_actions';
import { RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_POSTS} from '../actions/post_actions'
import { RECEIVE_MESSAGE } from '../actions/message_actions'

const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.payload.friendship.friendId] = action.payload.friendship
            return newState
        case ADD_FRIEND: 
            newState[action.friendship.friendId] = action.friendship
            return newState
        case REMOVE_FRIENDSHIP:
            // delete newState[action.friendshipId.friendId]
            newState[action.friendshipId.friendId] = {friendId: action.friendshipId.friendId, id: false }
            return newState
        default:
            return state;
    }
}

export default friendshipsReducer;