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
        loves = []
    likes = []
    dislikes = []
    laughs = []
    sads = []
    userReaction = false
    userReactionId = false
    comment.reactions.each do |reaction| 
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
        json.likes likes.length
        json.loves loves.length
        json.dislikes dislikes.length
        json.sads sads.length
        json.laughs laughs.length
        json.reactions comment.reactions.length
        json.userReaction userReaction
        json.userReactionId userReactionId
        name = []
        comment.user.name.split(" ").each do |part|
            name << part.capitalize
        end
        json.author name.join(" ")
    end
end