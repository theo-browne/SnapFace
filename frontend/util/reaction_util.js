export const createReaction = reaction => {
    return $.ajax({
        method: "POST",
        url: "/api/reactions",
        data: {reaction}
    })
}