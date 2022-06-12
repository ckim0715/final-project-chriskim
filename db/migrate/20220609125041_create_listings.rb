class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :user_id
      t.date :date

      t.timestamps
    end
  end
end
