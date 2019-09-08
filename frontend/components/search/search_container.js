import {connect} from 'react-redux'
import Search from './search'
import { fetchUsers, removeUsers} from '../../actions/friend_actions'
import { createFriendship } from '../../actions/friend_actions'

const mSTP = state => ({
    users: Object.values(state.entities.users),
    friendIds: state.session.friendIds
})


const mDTP = dispatch => ({
    fetchUsers: search => dispatch(fetchUsers(search)),
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    removeUsers: () => dispatch(removeUsers())

})


export default connect(mSTP, mDTP)(Search)