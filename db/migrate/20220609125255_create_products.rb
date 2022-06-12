class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :type
      t.string :brand
      t.string :specs
      t.integer :starting_bid
      t.integer :buy_price
      t.integer :user_id
      t.integer :listing_id
      t.string :model

      t.timestamps
    end
  end
end
