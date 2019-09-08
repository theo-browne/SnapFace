import { connect } from 'react-redux'
import { loginUser } from '../../actions/session_actions'
import SignIn from './signin'

const mDTP = dispatch => ({
    login: (user) => dispatch(loginUser(user))
})

export default connect(null, mDTP)(SignIn)