# friendIds = []
# @user.friends.each do |friend|
#     friendIds.push(friend.id)
# end

# json.id @user.id
# json.name @user.name
# json.friendIds friendIds



json.user do   
    json.id @user.id
    name = []
    json.postPhotos @user.post_photos.map{|photo| url_for(photo)}
    # json.postblobs @user.post_blobs
    @user.name.split(" ").each do |part|
            name << part.capitalize
        end
    json.name name.join(" ")
    json.friends @user.friends.length
    if @user.profile_photo.attached?
    json.profileUrl url_for(@user.profile_photo)
    else 
        json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
    end
end



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
        json.authorId @user.id
        if post.photo.attached?
        json.photoUrl url_for(post.photo)
        end
        if @user.profile_photo.attached?
            json.profileUrl url_for(@user.profile_photo)
        else 
            json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
        end
    json.loveImg asset_path("love.png")
    json.likeImg asset_path("like.png")
    json.wowImg asset_path("wow.png")
    json.sadImg asset_path("sad.png")
    json.laughImg asset_path("laugh.png")
        
    loves = []
    likes = []
    dislikes = []
    laughs = []
    sads = []
    userReaction = false
    userReactionId = false
    userReactionImg = "like.png"
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
            userReactionImg = "#{userReaction}.png"

        end
    end
    json.likes likes.length
    json.loves loves.length
    json.dislikes dislikes.length
    json.sads sads.length
    json.laughs laughs.length
    json.reactions post.reactions.length
    json.userReaction userReaction
    json.userReactionId userReactionId
    json.userReactionImg asset_path(userReactionImg)

    end 
end
end
    
 json.friendship do 
         json.set! @user.id do
             if @friendship
                json.id @friendship.id 
                json.friendId @friendship.friend_id 
             else
                json.friendId @user.id
                json.id false
             end
         end
 end

 json.friends do 
    if @user.friends.length > 0
    @user.friends[1..9].each do |friend|
        json.set! friend.id do 
            name = []
                friend.name.split(" ").each do |part|
                    name << part.capitalize
                end
           json.name name.join(" ")
           json.id friend.id
           if friend.profile_photo.attached?
                json.profileUrl url_for(friend.profile_photo)
           else 
                json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
           end
        end
    end
    end
 end

 json.maxPages @max 