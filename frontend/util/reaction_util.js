export const createReaction = reaction => {
    return $.ajax({
        method: "POST",
        url: "/api/reactions",
        data: {reaction}
    })
}

export const updateReaction = reaction => {
    return $.ajax({
        method: "PATCH",
        url: `/api/reactions/${reaction.id}`,
        data: {reaction}
    })
}

export const deleteReaction = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reactions/${id}`
    })
}