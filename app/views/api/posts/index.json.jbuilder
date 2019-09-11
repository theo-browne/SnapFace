


@posts.each do |post|
    json.set! post.id do 
        json.id post.id
        json.body post.body
        name = []
        post.user.name.split(" ").each do |part|
            name << part.capitalize
        end
        json.time post.created_at.to_formatted_s(:long_ordinal)
        json.author name.join(" ")
        json.authorId  post.user.id
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
        if post.user.profile_photo.attached?
            json.profileUrl url_for(post.user.profile_photo)
        else 
            json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
        end
    end 
end