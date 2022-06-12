class User < ApplicationRecord
    has_many :products, dependent: :destroy
    has_many :bids, dependent: :destroy
    has_many :payments, dependent: :destroy
    has_secure_password

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :address, presence: true
    validates :phone_number, presence: true

end
