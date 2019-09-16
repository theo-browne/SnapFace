class Reaction < ApplicationRecord

    validates :user_id, uniqueness: {scope: [:reacted_id, :reacted_type], 
        message: "cannot react the same thing twice"}
    
    belongs_to :user

    belongs_to :reacted, polymorphic: true,
        foreign_key: :reacted_id
end
