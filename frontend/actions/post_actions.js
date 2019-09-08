import * as APIPostsUtil from '../util/post_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'


export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})
export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
})

export const fetchPosts = () => dispatch => {
    return APIPostsUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
}

export const createPost = (post) => dispatch => {
    return APIPostsUtil.createPost(post).then(post => dispatch(receivePost(post)))
}

