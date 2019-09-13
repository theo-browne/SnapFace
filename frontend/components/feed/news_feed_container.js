import {connect} from 'react-redux'
import NewsFeed from './news_feed'
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';


const mSTP = state => ({
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session
})

const mDTP = dispatch => ({
    fetchPosts: (page) => dispatch(fetchPosts(page)),
    deletePost: id => dispatch(deletePost(id)),
    fetchComments: (postId, page) => dispatch(fetchComments(postId, page))
})




export default connect(mSTP, mDTP)(NewsFeed)