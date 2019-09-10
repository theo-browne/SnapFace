class Api::PostsController < ApplicationController

    def index 
        @posts = []
        @friend_posts = current_user.friends_posts
        @posts.concat(current_user.posts)
        @posts.concat(@friend_posts)
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

    def destroy 
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    def update 
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show
        else 
            render json: @post.errors.full_messages
        end
    end

    def show 
        @post = Post.find(params[:id])
        render :show
    end
    
    

    def post_params
        params.require(:post).permit(:body, :photo)
    end
end
