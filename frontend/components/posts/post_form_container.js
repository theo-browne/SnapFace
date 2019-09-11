import {connect} from 'react-redux'
import PostForm from './post_form'
import {createPost} from '../../actions/post_actions'

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
    createPost: post => dispatch(createPost(post))
})



export default connect(mSTP, mDTP)(PostForm)