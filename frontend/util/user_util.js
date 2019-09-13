export const fetchUser = (id, page) => {
    
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`,
        data: {page}
    })
}

export const updateUser = (formData, id )=> {
    
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
}
