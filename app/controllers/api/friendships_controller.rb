class Api::FriendshipsController < ApplicationController

    def create 
        @friendship = Friendship.new(friendship_params)
        @friendship.user_id = current_user.id
        reverse_friendship = Friendship.new()
        reverse_friendship.friend_id = @friendship.user_id
        reverse_friendship.user_id = @friendship.friend_id
        reverse_friendship.status = @friendship.status
        if @friendship.save
            reverse_friendship.save
            render json: @friendship.id
        else
            render json: @friendship.errors.full_messages
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        reverse_friendship = Friendship.where("user_id = ? AND friend_id = ?", @friendship.friend_id, @friendship.user_id)
        @friendship.delete
        reverse_friendship.delete
        render json: @friendship.id
    end



    def friendship_params
        params.require(:friendship).permit(:status, :friend_id)
    end
end
