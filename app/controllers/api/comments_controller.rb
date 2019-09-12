class Api::CommentsController < ApplicationController

    def index
        @post = Post.find(params[:post_id])
        @comments = @post.comments
    end

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else 
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render :show
    end

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id, :parent_comment_id)
    end
end
