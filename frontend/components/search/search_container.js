import {connect} from 'react-redux'
import Search from './search'
import { fetchUsers, removeUsers} from '../../actions/friend_actions'
import { createFriendship, deleteFriendship } from '../../actions/friend_actions'
import {receiveUser } from '../../actions/user_actions'

const mSTP = state => ({
    users: Object.values(state.entities.searchedUsers),
    friends: state.entities.friendships
})


const mDTP = dispatch => ({
    fetchUsers: search => dispatch(fetchUsers(search)),
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    removeUsers: () => dispatch(removeUsers()),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    receiveUser: id => dispatch(receiveUser(id))
})


export default connect(mSTP, mDTP)(Search)