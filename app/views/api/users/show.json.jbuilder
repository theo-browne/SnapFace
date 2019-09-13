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
    @user.name.split(" ").each do |part|
            name << part.capitalize
        end
    json.name name.join(" ")
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

 json.maxPages @max 