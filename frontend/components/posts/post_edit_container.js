import {connect} from 'react-redux'
import { updatePost, fetchPost }  from '../../actions/post_actions'
import EditPostForm from './edit_post_form'


const mSTP = (state, props) => {
    
    return{
    post: state.entities.posts[props.match.params.postId],
    user: state.session
    }
}

const mDTP = (dispatch) => ({
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: id => dispatch(fetchPost(id))
})

export default connect(mSTP, mDTP)(EditPostForm)

