import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { removeUsers } from '../../actions/friend_actions'
import ProfileFeed from './profile_feed'
import { deletePost, removePosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { createReaction, updateReaction, deleteReaction } from '../../actions/reaction_actions'
import { clearUsers } from '../../actions/user_actions'



const mSTP = (state, props) => ({
    user: state.entities.users[props.match.params.id],
    posts: Object.values(state.entities.posts).filter(post => post.authorId === +props.match.params.id).reverse() || [],
    currentUser: state.session,
    maxPages: state.pagination.profileFeedLength,
    friends: Object.values(state.entities.users).filter(user => user.id !== +props.match.params.id) || []
})



const mDTP = dispatch => ({
    fetchUser: (id, page) => dispatch(fetchUser(id, page)),
    removeUsers: () => dispatch(removeUsers()),
    deletePost: id => dispatch(deletePost(id)),
    fetchComments: (postId,page) => dispatch(fetchComments(postId, page)),
    createReaction: reaction => dispatch(createReaction(reaction)),
    deleteReaction: id => dispatch(deleteReaction(id)),
    updateReaction: reaction => dispatch(updateReaction(reaction)),
    removePosts: () => dispatch(removePosts()),
    clearUsers: () => dispatch(clearUsers()),
 
})

export default connect(mSTP, mDTP)(ProfileFeed)