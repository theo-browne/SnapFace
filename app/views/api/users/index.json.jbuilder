

json.users do 
    @users.each do |user|
        json.set! user.id do
            json.name user.name
            json.id user.id
        end
    end
end


json.friendships do 
    current_user.friendships.each do |friendship|
        json.set! friendship.friend_id do 
            json.id friendship.id
            json.friendId friendship.friend_id
        end 
    end
end