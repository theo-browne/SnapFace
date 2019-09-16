import * as APIPostsUtil from '../util/post_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const REMOVE_POSTS = 'REMOVE_POSTS'


export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})
export const receivePosts = (payload) => ({
    type: RECEIVE_POSTS,
    payload
})

export const removePost = (post) => ({
    type: REMOVE_POST,
    post
})

export const removePosts = () => ({
    type: REMOVE_POSTS
})


export const fetchPost = id => dispatch => {
    return APIPostsUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
}

export const fetchPosts = (page) => dispatch => {
    return APIPostsUtil.fetchPosts(page).then(payload => dispatch(receivePosts(payload)))
}

export const createPost = (post) => dispatch => {
    return APIPostsUtil.createPost(post).then(post => dispatch(receivePost(post)))
}

export const deletePost = postId => dispatch => {
    return APIPostsUtil.deletePost(postId).then(post => dispatch(removePost(post)))
}

export const updatePost = post => dispatch => {
    return APIPostsUtil.updatePost(post).then(post => dispatch(receivePost(post)))
}
