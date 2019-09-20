class Friendship < ApplicationRecord

    belongs_to :user

    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

    belongs_to :room

    def self.sort_by_messages(friendships) 
        res = friendships.sort_by do |friendship|
            if friendship.room.messages[-1]
                friendship.room.messages[-1].created_at
            else 
                friendship.room.created_at
            end
        end
        res.reverse
    end

    
end
