class Api::UsersController < ApplicationController

  def show 
    @user = User.find(params[:id])
    @posts = @user.posts
    render :show
  end
 
  def create
    @user = User.new(user_params)

    if @user.save
        login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index 
    @users = User.where("users.name LIKE ?", "#{params[:search][:name]}%").limit(5)
    
    render :index

  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end


end
