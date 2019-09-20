import {connect} from 'react-redux'
import MessagePanel from './message_panel'
import {fetchMessages} from '../../actions/message_actions'
 
const mSTP = state => ({
    friendship: state.entities.rooms[state.ui.currentMessage],
    messages: Object.values(state.entities.messages).filter(message => message.roomId === 5),
    currentUser: state.session
})

const mDTP = disptach => ({
    fetchMessages: roomId => disptach(fetchMessages(roomId))
})


export default connect(mSTP, mDTP)(MessagePanel)

