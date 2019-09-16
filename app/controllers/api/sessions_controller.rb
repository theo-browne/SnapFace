class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
          login(@user)
          render :show
        else
          render json: { type: "signin", errors: ["Invalid credentials"] }, status: 422
        end
    end

  def destroy
    @user = current_user
    if current_user
      logout
       if @user.name == "Demo User"
        @user.destroy
       end
      render json: {}
    else
      render json: ["no user to logout!"] , status: 422
    end
  end

end
