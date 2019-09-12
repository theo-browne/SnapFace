export const createComment = comment => {
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: {comment}
    })
}

export const fetchComments = postId => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${postId}/comments`,
    })
}