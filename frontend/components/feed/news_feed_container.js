import {connect} from 'react-redux'
import NewsFeed from './news_feed'
import { fetchPosts, deletePost } from '../../actions/post_actions';


const mSTP = state => ({
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
})




export default connect(mSTP, mDTP)(NewsFeed)