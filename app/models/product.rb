class Product < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates :part_type, presence: true
    validates :brand, presence: true
    validates :starting_bid, presence: true
    validates :buy_price, presence: true
    validates :user_id, presence: true
    validates :model, presence: true

end
