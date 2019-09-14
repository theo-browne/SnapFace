import {connect} from 'react-redux'
import CommentForm from './comment_form'
import {createComment} from '../../actions/comment_actions'

const mSTP = (state, props) => {
    return {
        userPhoto: state.session.profileUrl
    }
}
const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentForm)