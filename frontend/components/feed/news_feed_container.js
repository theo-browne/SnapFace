import {connect} from 'react-redux'
import NewsFeed from './news_feed'
import { fetchPosts } from '../../actions/post_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})




export default connect(mSTP, mDTP)(NewsFeed)