import { connect } from 'react-redux'
import Home from './home'
import { logoutUser } from '../../actions/session_actions'
import { createFriendship } from '../../actions/friend_actions'

const mSTP = state => {
    const currentUser = state.session
    return {
    currentUser
    }
}



const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    createFriendship: friendship => dispatch(createFriendship(friendship))
})


export default connect(mSTP, mDTP)(Home)