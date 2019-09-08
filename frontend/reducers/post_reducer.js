import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:

            newState[action.post.id] = action.post
            return newState
        default:
            return state;
    }
}

export default postsReducer;