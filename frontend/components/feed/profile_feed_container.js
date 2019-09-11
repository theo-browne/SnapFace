import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { removeUsers } from '../../actions/friend_actions'
import ProfileFeed from './profile_feed'
import { deletePost } from '../../actions/post_actions';


const mSTP = (state, props) => ({
    user: state.entities.users[props.match.params.id],
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session
})



const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    removeUsers: () => dispatch(removeUsers()),
    deletePost: id => dispatch(deletePost(id))
})

export default connect(mSTP, mDTP)(ProfileFeed)