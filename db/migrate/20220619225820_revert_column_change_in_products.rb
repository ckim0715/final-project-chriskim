class RevertColumnChangeInProducts < ActiveRecord::Migration[6.1]
  def change
    change_column :products, :starting_bid, :decimal
    change_column :products, :buy_price, :decimal
  end
end
