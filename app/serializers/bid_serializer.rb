class BidSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :user_id, :amount

  belongs_to :user
  belongs_to :product
end
