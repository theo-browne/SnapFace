import {connect} from 'react-redux'
import PhotoModal from './photo_modal'
import { fetchPost} from '../../actions/post_actions'
import {fetchComments} from '../../actions/comment_actions'
import {createReaction, updateReaction, deleteReaction} from '../../actions/reaction_actions'


const mSTP = (state, props) => ({
    post: state.entities.posts[props.match.params.id]
})

const mDTP = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    fetchComments: (postId, page) => dispatch(fetchComments(postId, page)),
    createReaction: reaction => dispatch(createReaction(reaction)),
    deleteReaction: id => dispatch(deleteReaction(id)),
    updateReaction: reaction => dispatch(updateReaction(reaction)),
})

export default connect(mSTP, mDTP)(PhotoModal)