class Api::ReactionsController < ApplicationController

    def create
        @reaction = Reaction.create(reaction_params)
        @reaction.user_id = current_user.id
        if @reaction.save
            render :show
        else 
            render json: @reaction.errors.full_messages, status: 422
        end
    end




    def reaction_params
        params.require(:reaction).permit(:reacted_id, :reacted_type, :reaction_type)
    end
end
