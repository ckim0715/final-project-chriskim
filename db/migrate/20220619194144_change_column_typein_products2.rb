class ChangeColumnTypeinProducts2 < ActiveRecord::Migration[6.1]
  def change
    change_column :products, :starting_bid, :integer
    change_column :products, :buy_price, :integer
  end
end
