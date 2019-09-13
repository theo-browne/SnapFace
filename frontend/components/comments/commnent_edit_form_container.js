import { connect } from 'react-redux'
import EditCommentForm from './comment_edit_form'
import { updateComment, fetchComment } from '../../actions/comment_actions'



const mSTP = (state, props) => {
    
    return{
    comment: state.entities.comments[props.match.params.id],
    currentComment: state.ui.currentComment
    }
}

const mDTP = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    fetchComment: id => dispatch(fetchComment(id))
})

export default connect(mSTP, mDTP)(EditCommentForm)