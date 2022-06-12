class ProductSerializer < ActiveModel::Serializer
  attributes :id, :part_type, :brand, :message, :starting_bid, :buy_price, :user_id, :model, :image_url

  belongs_to :user
  has_many :bids
end
