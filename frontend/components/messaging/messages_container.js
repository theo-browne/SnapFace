import {connect} from 'react-redux'
import Messages from './messages'
import {fetchFriendships} from '../../actions/friend_actions'
import {updateUnread, currentMessage} from '../../actions/ui_actions'
import { receiveMessage} from '../../actions/message_actions'

const mSTP = state => ({
    unread: state.ui.unread,
    friendships: Object.values(state.entities.friendships).filter(friendship => friendship.room_id)
})



const mDTP = dispatch => ({
    fetchFriendships: () => dispatch(fetchFriendships()),
    updateUnread: () => dispatch(updateUnread()),
    currentMessage: (friendshipId) => dispatch(currentMessage(friendshipId)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(Messages)