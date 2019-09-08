export const fetchPosts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/posts"
    })
}


export const createPosts = () => {
    return $.ajax({
        method: "POST",
        url: "/api/posts"
    })
}