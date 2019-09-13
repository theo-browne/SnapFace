class Comment < ApplicationRecord

    validates :body, :user_id, :post_id, presence: true


    belongs_to :post

    belongs_to :user

    has_many :reactions, as: :reacted
end
