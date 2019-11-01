import { RECEIVE_USERS, ADD_FRIEND, REMOVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS } from '../actions/friend_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POSTS } from '../actions/post_actions'
import { RECEIVE_MESSAGE } from '../actions/message_actions'

const roomsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_FRIENDSHIPS:
            newState['lastMessage'] = 0
            let count = 0
            Object.values(action.friendships).forEach(friendship => {
                friendship['subscription'] = count
                newState[friendship.friendId] = friendship
                count += 1
            })
            return newState
        case RECEIVE_MESSAGE:
            let room = Object.values(newState).filter(room => room.room_id === action.message.roomId)[0]
            newState[room.friendId]['last_message'] = action.message.content
            newState['lastMessage'] -= 1
            newState[room.friendId]['pos'] = newState['lastMessage']
            return newState
        default:
            return state;
    }
}

export default roomsReducer;