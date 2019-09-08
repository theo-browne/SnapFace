import sessionReducer from "./session_reducer"
import errorsReducer from './errors_reducer'
import { combineReducers } from "redux";
import entities_reducer from './entities_reducer'

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entities_reducer
})