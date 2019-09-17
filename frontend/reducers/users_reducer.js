import { RECEIVE_USERS, REMOVE_USERS } from '../actions/friend_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_POSTS} from '../actions/post_actions'
import { CLEAR_USERS} from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_USER:
            // newState = {}
            if (action.payload.friends) {
            Object.values(action.payload.friends).forEach(friend => {
                newState[friend.id] = friend
            })}
            newState[action.payload.user.id] = action.payload.user 
            return newState;
        case RECEIVE_POSTS: 
          return action.payload.suggested
          case CLEAR_USERS: 
          return {}
        // case RECEIVE_USERS:
        //     return action.payload.users || {}
        // case REMOVE_USERS:
        //     return {}
        default:
            return state;
    }
}

export default usersReducer;