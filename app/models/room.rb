class Room < ApplicationRecord


    
    has_many :friendships,
        dependent: :destroy

    has_many :users, 
        through: :friendships,
        source: :user

    has_many :messages
end
