import * as APIFriendsUtil from '../util/friends_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REMOVE_USERS = 'REMOVE_USERS'
export const ADD_FRIEND = 'ADD_FRIEND'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'
export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS'



export const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    payload
})

export const receiveFriendships = (friendships) => ({
    type: RECEIVE_FRIENDSHIPS,
    friendships
})

export const removeUsers = () => ({
    type: REMOVE_USERS
})

export const addFriendship = (friendship) => ({
    type: ADD_FRIEND,
    friendship
})

export const removeFriendship = (friendshipId) => ({
    type: REMOVE_FRIENDSHIP,
    friendshipId
})






export const fetchUsers = (search) => dispatch => {
    return APIFriendsUtil.fetchUsers(search).then(users => dispatch(receiveUsers(users)))
}

export const createFriendship = friendship => dispatch => {
    return APIFriendsUtil.createFriendship(friendship).then(friendship => dispatch(addFriendship(friendship)))
}

export const deleteFriendship = friendshipId => dispatch => {
    return APIFriendsUtil.deleteFriendship(friendshipId).then(friendshipId => dispatch(removeFriendship(friendshipId)))
}

export const fetchFriendships = () => dispatch => {
    return APIFriendsUtil.fetchFriendships().then(friendships => dispatch(receiveFriendships(friendships)))
}


