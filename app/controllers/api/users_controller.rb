class Api::UsersController < ApplicationController

  def show 
    @user = User.find(params[:id])
    @posts = @user.posts
    @friendship = current_user.friendships.find_by("friend_id = ?", @user.id)
    render :show
  end
 
  def create
    @user = User.new(user_params)
    @posts = []
    if @user.save
        login(@user)
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
