export const fetchPosts = (page) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/posts",
        data: {page}
    })
}

export const fetchPost = id => {
    
    return $.ajax({
        method: "GET",
        url: `/api/posts/${id}`
    })
}


export const createPost = (formData) => {
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`
    })
}

export const updatePost = post => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: {post}
    })
}