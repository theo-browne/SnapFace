class Api::UsersController < ApplicationController

  def show 
    @user = User.find(params[:id])
    @friendship = current_user.friendships.find_by("friend_id = ?", @user.id)
    # @posts = @user.posts.order("posts.created_at DESC")
    @posts = @user.posts.order("posts.created_at DESC").page(params[:page]).per(5)
    @max = @user.posts.length / 5
    render :show
  end
 
  def create
    @user = User.new(user_params)
    @posts = []
    if @user.save
        Friendship.create(user_id: @user.id, friend_id: @user.id, status: "CONFIRMED")
        login(@user)
        if @user.name == "Demo User"
          Post.create(user_id: @user.id, body: "Welcome to Snap Face! This is your news feed. The posts of you and all your friends will be here! If want to find users to be friends with, you can use the search bar or use the suggested friends panel.")
        end
      render :new
    else
      render json: { type: "signup", errors: @user.errors.full_messages }, status: 422
    end
  end

  def index 
    @users = User.where("users.name LIKE ?", "#{params[:search][:name]}%").limit(5)
    render :index
  end

  def update 
    
    @user = User.find(params[:id])
    @posts = @user.posts
    if @user.update(user_params)
      render :show
    else
      render json: { type: "userUpdate", errors: @user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :profile_photo)
  end


end
