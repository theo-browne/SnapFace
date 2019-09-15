class Post < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :user

    has_one_attached :photo

    has_many :comments

    has_many :reactions, as: :reacted


end
