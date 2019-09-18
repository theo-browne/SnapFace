import {connect} from 'react-redux'
import MessagePanel from './message_panel'
 
const mSTP = state => ({
    friendship: state.entities.friendships[state.ui.currentMessage]
})

export default connect(mSTP)(MessagePanel)

