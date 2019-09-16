import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, REMOVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions"


const postsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_POSTS:
            if (action.payload.posts) {
            Object.values(action.payload.posts).forEach(post => {
                newState[post.id] = post 
            })
            }
            return newState
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState
        case RECEIVE_USER: 
            if (action.payload.posts)
            Object.values(action.payload.posts).forEach(post => {
                newState[post.id] = post
            })
            return newState || {}
        case REMOVE_POST:
            delete newState[action.post.id]
            return newState
        case LOGOUT_USER: 
            return {}
        case REMOVE_POSTS: 
            return {}
        default:
            return state;
    }
}

export default postsReducer;