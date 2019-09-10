
        json.id @post.id
        json.body @post.body
        name = []
        @post.user.name.split(" ").each do |part|
            name << part.capitalize
        end
        json.time @post.created_at.to_formatted_s(:long_ordinal)
        json.author name.join(" ")
        json.authorId  @post.user.id
