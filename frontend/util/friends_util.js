export const fetchUsers = (search) => {
    return $.ajax({
        url: "/api/users",
        method: "GET",
        data: { search }
    })
}


export const createFriendship = (friendship) => {
    return $.ajax({
        url: '/api/friendships',
        method: 'POST',
        data: {
            friendship
        }
    })
}

export const deleteFriendship = (friendship)  => {
    return $.ajax({
        url: `/api/friendships/${friendshipId}`,
        method: 'DELETE',
        data: {
            friendship
        }
    })
}


