import { connect } from 'react-redux'
import { createUser } from '../../actions/session_actions'
import SignUp from './signup'

const mDTP = dispatch => ({
    createUser: (user) => dispatch(createUser(user))
})

export default connect(null, mDTP)(SignUp)