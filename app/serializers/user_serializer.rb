class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :password_digest, :phone_number

  has_many :products
  has_many :bids
 
end
