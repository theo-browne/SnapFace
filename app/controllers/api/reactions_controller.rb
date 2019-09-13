class Api::ReactionsController < ApplicationController

    def create
        @reaction = Reaction.create(reaction_params)
        @reaction.save
    end




    def reaction_params
        params.require(:reaction).permit(:reacted_id, :reacted_type, :reaction_type)
    end
end
