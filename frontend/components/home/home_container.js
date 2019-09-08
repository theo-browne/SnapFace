import { connect } from 'react-redux'
import Home from './home'
import { logoutUser } from '../../actions/session_actions'
import { createFriendship } from '../../actions/friend_actions'

const mSTP = state => ({
    currentUser: state.session["name"].split(" ")[0]})



const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    createFriendship: friendship => dispatch(createFriendship(friendship))
})


export default connect(mSTP, mDTP)(Home)