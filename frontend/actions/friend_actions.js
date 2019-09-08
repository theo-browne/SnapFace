import * as APIFriendsUtil from '../util/friends_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REMOVE_USERS = 'REMOVE_USERS'


export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const removeUsers = () => ({
    type: REMOVE_USERS
})

export const deleteFriendId = (id) => ({
    type: DELETE_FRIEND_ID,
    id
})



export const fetchUsers = (search) => dispatch => {
    return APIFriendsUtil.fetchUsers(search).then(users => dispatch(receiveUsers(users)))
}

export const createFriendship = friendship => dispatch => {
    return APIFriendsUtil.createFriendship(friendship).then()
}



