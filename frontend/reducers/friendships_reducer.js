import { RECEIVE_USERS, ADD_FRIEND, REMOVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS } from '../actions/friend_actions';
import { RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_POSTS} from '../actions/post_actions'

const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        // case RECEIVE_USERS:
        //     return action.payload.friendships || {}
        case RECEIVE_USER:
            newState[action.payload.friendship.friendId] = action.payload.friendship
            return newState
        case ADD_FRIEND: 
            newState[action.friendship.friendId] = action.friendship
            return newState
        case REMOVE_FRIENDSHIP:
            delete newState[action.friendshipId.friendId]
            return newState
        // case RECEIVE_POSTS:
        //     return action.payload.friendships || {}
        case RECEIVE_FRIENDSHIPS: 
            let count = 0
            Object.values(action.friendships).forEach(friendship => {
                
                friendship['subscription'] = count
                newState[friendship.friendId] = friendship
                count += 1
            })
            return newState
        default:
            return state;
    }
}

export default friendshipsReducer;