import { RECEIVE_POSTS} from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions'

const paginationReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_POSTS:
            newState["newsFeedPageLength"] = action.payload.maxPages
            return newState
        case RECEIVE_USER:
            newState["profileFeedLength"] = action.payload.maxPages
            return newState
        default:
            return state;
    }
}

export default paginationReducer;