import usersReducer from "./users_reducer"
import { combineReducers } from "redux"
import friendshipsReducer from './friendships_reducer'
import postsReducer from './post_reducer'
import searchedUsersReducer from './searched_users_reducer'
import commentsReducer from './comments_reducer'
import reactionReducer from './reaction_reducer'
import messageReducer from './message_reducer'


export default combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer,
    posts: postsReducer,
    searchedUsers: searchedUsersReducer,
    comments: commentsReducer,
    reactions: reactionReducer,
    messages: messageReducer
})
