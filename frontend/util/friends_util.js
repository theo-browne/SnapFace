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

export const deleteFriendship = (id)  => {
    return $.ajax({
        url: `/api/friendships/${id}`,
        method: 'DELETE',
    })
}

export const fetchFriendships = () => {
    return $.ajax({
        method: "GET",
        url: 'api/friendships'
    })
}
