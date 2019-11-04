import { RECEIVE_USERS, REMOVE_USERS, REMOVE_FRIENDSHIP, ADD_FRIEND } from '../actions/friend_actions';
import { RECEIVE_USER, REMOVE_USER, ADD_USER } from '../actions/user_actions'
import { RECEIVE_POSTS} from '../actions/post_actions'
import { CLEAR_USERS} from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USER:
            if (action.payload.friends) {
            Object.values(action.payload.friends).forEach(friend => {
                newState[friend.id] = friend
            })}
            newState[action.payload.user.id] = action.payload.user 
            return newState;

        case ADD_USER:
            newState[action.user.id] = action.user 
            return newState
        case RECEIVE_POSTS: 
          return action.payload.suggested
        case CLEAR_USERS: 
          return {}
        case REMOVE_USER:
            delete newState[action.id]
            return newState
        case REMOVE_FRIENDSHIP:
            newState[action.friendshipId.friendId]["friends"] -= 1
            return newState
        case ADD_FRIEND:
            newState[action.friendship.friendId]["friends"] += 1
            return newState
        default:
            return state;
    }
}

export default usersReducer;