import { combineReducers } from 'redux'
import sessionErrorsReducer from './session_error_reducer'



export default combineReducers({
    sessions: sessionErrorsReducer
});