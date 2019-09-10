


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
    end 
end