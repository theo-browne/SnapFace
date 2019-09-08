import usersReducer from "./users_reducer"
import { combineReducers } from "redux"
import friendshipsReducer from './friendships_reducer'

export default combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer
})