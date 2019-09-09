import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions'

const postsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:

            newState[action.post.id] = action.post
            return newState
        case RECEIVE_USER: 
            return action.payload.posts || {}
        default:
            return state;
    }
}

export default postsReducer;