class Post < ApplicationRecord

    belongs_to :user

    has_one_attached :photo

    has_many :comments

    has_many :reactions, as: :reacted


end
