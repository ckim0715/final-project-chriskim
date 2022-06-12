class BidsController < ApplicationController
    def create
        bid = Bid.create(bid_params)
        if bid.valid?
            render json: bid, status: :created
        else 
            render json: { errors: bid.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def bid_params
        params.permit(:product_id, :amount, :user_id)
    end


end
