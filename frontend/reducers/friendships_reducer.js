import { RECEIVE_USERS, ADD_FRIEND, REMOVE_FRIENDSHIP } from '../actions/friend_actions';
import { RECEIVE_USER} from '../actions/user_actions';

const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USERS:

            return action.payload.friendships || {}

        // case RECEIVE_USER:

        //     return action.payload.friendships || {}
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