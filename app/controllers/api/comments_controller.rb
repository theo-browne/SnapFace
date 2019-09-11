class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else 
            render json: @comment.errors.full_messages
        end
    end

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id, :parent_comment_id)
    end
end
