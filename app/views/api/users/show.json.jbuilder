# friendIds = []
# @user.friends.each do |friend|
#     friendIds.push(friend.id)
# end

# json.id @user.id
# json.name @user.name
# json.friendIds friendIds

json.user do   
    json.id @user.id
    json.name @user.name
    if @friend_id
    json.friendId @friend_id.id 
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
    end 
end
end
    
# json.friendships do 
#     @friendships.each do |friendship|
#         json.set! friendship.friend_id do
#             json.friend_id friendship.friend_id
#             json.id friendship.id
#             json.friendId friendship.friend_id
#         end
#     end
# end