
    @friendships.each do |friendship|
        json.set! friendship.friend_id do 
            json.id friendship.id
            json.friendId friendship.friend_id
            json.room_id friendship.room_id
            json.friend_name friendship.friend.name
            json.friend_img url_for(friendship.friend.profile_photo)
        end
    end
