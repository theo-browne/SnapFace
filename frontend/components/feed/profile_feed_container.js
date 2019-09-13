import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { removeUsers } from '../../actions/friend_actions'
import ProfileFeed from './profile_feed'
import { deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';


const mSTP = (state, props) => ({
    user: state.entities.users[props.match.params.id],
    posts: Object.values(state.entities.posts).filter(post => post.authorId === +props.match.params.id).reverse(),
    currentUser: state.session
})



const mDTP = dispatch => ({
    fetchUser: (id, page) => dispatch(fetchUser(id, page)),
    removeUsers: () => dispatch(removeUsers()),
    deletePost: id => dispatch(deletePost(id)),
    fetchComments: (postId,page) => dispatch(fetchComments(postId, page))
})

export default connect(mSTP, mDTP)(ProfileFeed)