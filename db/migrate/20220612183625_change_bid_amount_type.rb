class ChangeBidAmountType < ActiveRecord::Migration[6.1]
  def change
    change_column :bids, :amount, :decimal
  end
end
