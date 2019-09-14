import {connect} from 'react-redux'
import NewsFeed from './news_feed'
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { createReaction, updateReaction, deleteReaction}  from '../../actions/reaction_actions'

const mSTP = state => ({
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session,
    maxPages: state.pagination.newsFeedPageLength
})

const mDTP = dispatch => ({
    fetchPosts: (page) => dispatch(fetchPosts(page)),
    deletePost: id => dispatch(deletePost(id)),
    fetchComments: (postId, page) => dispatch(fetchComments(postId, page)),
    createReaction: reaction => dispatch(createReaction(reaction)),
    deleteReaction: id => dispatch(deleteReaction(id)),
    updateReaction: reaction => dispatch(updateReaction(reaction))
})

export default connect(mSTP, mDTP)(NewsFeed)