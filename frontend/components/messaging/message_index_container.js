import { connect } from 'react-redux'
import MessageIndex from './message_index'
import { fetchMessages } from '../../actions/message_actions'
import {removeMessage} from '../../actions/ui_actions'

const mSTP = (state, props) => ({
    messages: Object.values(state.entities.messages).filter(message => message.roomId === props.friendship.room_id),
    currentUser: state.session
})

// const mSTP = (state, props) => {
    
//     return {
//     messages: Object.values(state.entities.messages).filter(message => message.roomId === props.friendship.room_id)
//     }
// }

const mDTP = disptach => ({
    fetchMessages: (roomId, page) => disptach(fetchMessages(roomId, page)), 
    removeMessage: () => disptach(removeMessage())
})


export default connect(mSTP, mDTP)(MessageIndex)