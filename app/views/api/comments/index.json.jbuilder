@comments.each do |comment|
    json.set! comment.id do 
        json.id comment.id
        json.body comment.body
        json.postId comment.post_id
        json.authorId comment.user_id
        if comment.user.profile_photo.attached?
            json.profileUrl url_for(comment.user.profile_photo)
        else 
            json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
        end
        name = []
        comment.user.name.split(" ").each do |part|
            name << part.capitalize
        end
        json.author name.join(" ")
    end
end