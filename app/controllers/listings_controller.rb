class ListingsController < ApplicationController

    def create
        listing = Listing.create(listing_params)
        if listing.valid?
            render json: listing, status: :created
        else 
            render json: { errors: listing.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def listing_params
        params.permit(:user_id, :date, :message)
    end

end
