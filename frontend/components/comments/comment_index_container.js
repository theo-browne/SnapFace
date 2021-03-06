import {connect} from 'react-redux'
import CommentIndex from './comment_index'
import { fetchComments, deleteComment, updateComment, removeComments } from '../../actions/comment_actions'
import {setComment} from '../../actions/ui_actions'
import { createReaction, updateReaction, deleteReaction } from '../../actions/reaction_actions'


const mSTP = (state, props) => ({
    comments: Object.values(state.entities.comments).filter(comment => comment.postId === props.post.id).reverse(),
    currentUser: state.session
})

// const mSTP = (state, props) => {
     
//     return {
//     comments: Object.values(state.entities.comments).filter(comment => comment.postId === props.post.id).reverse()
//     }
// }

const mDTP = dispatch => ({
    fetchComments: (postId, page) => dispatch(fetchComments(postId, page)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: comment => dispatch(updateComment(comment)),
    removeComments: postId => dispatch(removeComments(postId)),
    setComment: comment => dispatch(setComment(comment)),
    createReaction: reaction => dispatch(createReaction(reaction)),
    deleteReaction: id => dispatch(deleteReaction(id)),
    updateReaction: reaction => dispatch(updateReaction(reaction))
})

export default connect(mSTP, mDTP)(CommentIndex)