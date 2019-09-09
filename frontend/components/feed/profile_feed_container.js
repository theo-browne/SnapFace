import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import ProfileFeed from './profile_feed'

const mSTP = (state, props) => ({
    user: state.entities.users[props.match.params.id],
    posts: Object.values(state.entities.posts)
})



const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mSTP, mDTP)(ProfileFeed)