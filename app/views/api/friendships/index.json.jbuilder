
    @friendships.each.with_index do |friendship, idx|
        json.set! friendship.friend_id do 
            json.id friendship.id
            json.friendId friendship.friend_id
            json.room_id friendship.room_id
            name = []
            friendship.friend.name.split(" ").each do |part|
                name << part.capitalize
            end
            json.friend_name name.join(" ")
            json.pos idx + 1
            last_message = friendship.room.messages[-1] ? friendship.room.messages[-1].content :  ""
            json.last_message last_message
            if friendship.friend.profile_photo.attached?
            json.friend_img url_for(friendship.friend.profile_photo) 
            else 
             json.friend_img "https://image.flaticon.com/icons/svg/149/149452.svg"
            end
        end
    end
