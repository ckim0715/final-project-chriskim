class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :part_type, :brand, :message, :starting_bid, :buy_price, :user_id, :model, :image_url, :product_image

  belongs_to :user
  has_many :bids

  def product_image
    if object.product_image.attached?
      {
        url: rails_blob_url(object.product_image)
      }
    end
  end
  
end
