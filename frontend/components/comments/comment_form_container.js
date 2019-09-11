import {connect} from 'react-redux'
import CommentForm from './comment_form'
import {createComment} from '../../actions/comment_actions'

const mSTP = (state, props) => {
    let userPhoto;

    if (props.match) {
        userPhoto = state.entities.users[props.match.params.id]
    } else {
        userPhoto = state.session.profileUrl
    }


    return {
        userPhoto
    }
}
const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentForm)