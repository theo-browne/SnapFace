import { RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_POSTS} from '../actions/post_actions'

let errors = {
    "Email can't be blank": "Email",
    "Name can't be blank": "Name",
    "Password is too short (minimum is 6 characters)": "Password",
    "Invalid credentials": "Credentials"
}


const sesssionErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {}

    switch (action.type) {
        case RECEIVE_USER:
            return {};
        case RECEIVE_POSTS:
            return {}
        case RECEIVE_SESSION_ERRORS:
            
            let errorsObj = {}
            let curErrors = action.errors.responseJSON.errors
            for (let i = 0; i < curErrors.length; i++) {
                let error = curErrors[i]
                errorsObj[errors[error]] = error
            }
            
            newState[action.errors.responseJSON.type] = errorsObj
            return newState
        default:
            return state;
    }
}

export default sesssionErrorsReducer;