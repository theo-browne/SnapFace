export const fetchMessages = (roomId, page )=> {
    return $.ajax({
        method: 'GET',
        url: `/api/rooms/${roomId}`,
        data: {page}
    })
}