class Reaction < ApplicationRecord

    belongs_to :user
    belongs_to :reacted, polymorphic: true,
        foreign_key: :reacted_id
end
