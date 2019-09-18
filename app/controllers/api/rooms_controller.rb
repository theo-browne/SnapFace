class Api::RoomsController < ApplicationController

    def show
        @room = Room.find(params[:id])
        @messages = @room.messages.order("messages.created_at DESC").page(params[:page]).per(5)
        render :show
    end


end
