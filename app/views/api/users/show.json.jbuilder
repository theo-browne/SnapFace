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
    end 
end
end
    