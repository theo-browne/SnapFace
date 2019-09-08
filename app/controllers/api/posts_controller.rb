class Api::PostsController < ApplicationController

    def index 
        @posts = current_user.friends_posts
        render :index
    end

    def create 
        @post = Post.new(post_params)
        @post.user_id = current_user.id 
        if @post.save 
            render :show
        else 
            render json: @post.errors.full_messages
        end
    end 


    def post_params
        params.require(:post).permit(:body)
    end
end
