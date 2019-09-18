import {connect} from 'react-redux'
import Messages from './messages'

const mSTP = state => ({
    unread: state.ui.unread,
    friendships: Object.values(state.entities.friendships)
})

export default connect(mSTP)(Messages)