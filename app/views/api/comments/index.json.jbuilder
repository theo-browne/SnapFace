@comments.each do |comment|
    json.set! comment.id do 
        json.id comment.id
        json.body comment.body
        json.postId comment.post_id
        json.authorId comment.user_id
    end
end