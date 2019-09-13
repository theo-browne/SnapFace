import sessionReducer from "./session_reducer"
import errorsReducer from './errors_reducer'
import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer'
import paginationReducer from './pagination_reducer'
import uiReducer from './ui_reducer'


export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    pagination: paginationReducer,
    ui: uiReducer
})
