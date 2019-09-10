import {connect} from 'react-redux'
import EditUserForm from './edit_user_form'
import { updateUser } from '../../actions/user_actions'

const mSTP = (state, props) => ({
    state: state.entities.users[props.match.params.id]
})

const mDTP = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(EditUserForm)