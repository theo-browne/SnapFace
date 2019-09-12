class Post < ApplicationRecord

    belongs_to :user

    has_one_attached :photo

    has_many :comments

    def grab_comments(last_comment)
        @comments = @post.comments.where("comments.created_at > ?", last_comment.created_at).order("created_at DESC")
    end

end
