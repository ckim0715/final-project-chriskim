class BidsController < ApplicationController
    def create
        bid = Bid.create(bid_params)
        if bid.valid?
            render json: bid, status: :created
        else 
            render json: { errors: bid.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        bids = Bid.where(user_id: session[:user_id])
        if bids
            render json: bids, include: :product
        else 
            render json: { error: "No Current Bids" }, status: :not_found
        end
    end

    def destroy
        bid = Bid.find_by(id: params[:id])
        if bid
            bid.destroy
            render json: bid
        else
          render json: { error: "Bid not found" }, status: :not_found
        end
    end

    private

    def bid_params
        params.permit(:product_id, :amount, :user_id)
    end


end
