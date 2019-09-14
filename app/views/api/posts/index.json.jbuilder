
json.posts do
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
    loves = []
    likes = []
    dislikes = []
    laughs = []
    sads = []
    userReaction = false
    userReactionId = false
    post.reactions.each do |reaction| 
        if reaction.reaction_type == 'love'
            loves << reaction
        elsif reaction.reaction_type == 'like'
            likes << reaction
        elsif reaction.reaction_type == 'dislike'
            dislikes << reaction
        elsif reaction.reaction_type == 'laugh'
            laughs << reaction
        elsif reaction.reaction_type == 'sad'
            sads << reaction
        end
        if reaction.user_id == current_user.id
            userReaction = reaction.reaction_type
            userReactionId = reaction.id
        end
    end
    # json.loveImg url_for("app/assets/images/Untitled design.png")
    json.loveImg asset_path("Untitled design.png")

    json.likes likes.length
    json.loves loves.length
    json.dislikes dislikes.length
    json.sads sads.length
    json.laughs laughs.length
    json.reactions post.reactions.length
    json.userReaction userReaction
    json.userReactionId userReactionId
    end 
end 
end
json.maxPages @max 

