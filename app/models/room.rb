class Room < ApplicationRecord


    
    has_many :friendships

    has_many :users, 
        through: :friendships,
        source: :user

    has_many :messages
end
