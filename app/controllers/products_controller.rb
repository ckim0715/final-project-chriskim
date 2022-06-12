class ProductsController < ApplicationController
    def create
        product = Product.create(product_params)
        if product.valid?
            render json: product, status: :created
        else 
            render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def pc
        pc = Product.where(part_type: "PC")
        render json: pc, include: :bids
    end

    def motherboard
        motherboard = Product.where(part_type: "Motherboard")
        render json: motherboard, include: :bids
    end

    def cpu
        cpu = Product.where(part_type: "CPU")
        render json: cpu, include: :bids
    end

    def gpu
        gpu = Product.where(part_type: "GPU")
        render json: gpu, include: :bids
    end

    def memory
        memory = Product.where(part_type: "Memory")
        render json: memory, include: :bids
    end

    def storage
        storage = Product.where(part_type: "Storage")
        render json: storage, include: :bids
    end

    def power_supply
        power_supply = Product.where(part_type: "Power Supply")
        render json: power_supply, include: :bids
    end

    def other
        other = Product.where(part_type: "Other")
        render json: other, include: :bids
    end

    def destroy
        product = Product.find_by(id: params[:id])
        if product
            product.destroy
            render json: product
        else 
            render json: {error: "Product not found"}, status: :not_found
        end
    end

    private

    def product_params
        params.permit(:part_type, :brand, :model, :starting_bid, :buy_price, :user_id, :image_url, :message)
    end

end
