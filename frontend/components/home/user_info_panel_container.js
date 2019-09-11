import {connect} from 'react-redux'
import UserInfoPanel from './user_info_panel'
import { createFriendship, deleteFriendship } from '../../actions/friend_actions'
import { fetchUser, updateUser } from '../../actions/user_actions'

const mSTP = (state, props) => ({
    user: state.entities.users[props.match.params.id],
    friendship: state.entities.friendships[props.match.params.id],
    currentUser: state.session
})

const mDTP = dispatch => ({
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: (data, id) => dispatch(updateUser(data, id))
})


export default connect(mSTP, mDTP)(UserInfoPanel)


