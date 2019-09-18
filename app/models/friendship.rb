class Friendship < ApplicationRecord

    belongs_to :user

    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

    belongs_to :room
end
