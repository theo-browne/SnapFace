json.id @comment.id
json.body @comment.body
json.authorId @comment.user_id
json.postId @comment.post_id
if @comment.user.profile_photo.attached?
    json.profileUrl url_for(@comment.user.profile_photo)
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
    userReactionImg = "like.png"
    @comment.reactions.each do |reaction| 
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
            userReactionImg = "#{userReaction}.png"
        end
    end
        json.likes likes.length
        json.loves loves.length
        json.dislikes dislikes.length
        json.sads sads.length
        json.laughs laughs.length
        json.reactions @comment.reactions.length
        json.userReaction userReaction
        json.userReactionId userReactionId
        json.loveImg asset_path("love.png")
        json.likeImg asset_path("like.png")
        json.wowImg asset_path("wow.png")
        json.sadImg asset_path("sad.png")
        json.laughImg asset_path("laugh.png")
        json.userReactionImg asset_path(userReactionImg)

name = []
@comment.user.name.split(" ").each do |part|
    name << part.capitalize
end
json.author name.join(" ")