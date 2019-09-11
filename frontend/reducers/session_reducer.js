import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions"

const sessionReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case LOGIN_USER:
            
            return { id: action.user.id, name: action.user.name, profileUrl: action.user.profileUrl };
        case LOGOUT_USER:
            return { currentUser: null };
        default:
            return state;
    }

}

export default sessionReducer