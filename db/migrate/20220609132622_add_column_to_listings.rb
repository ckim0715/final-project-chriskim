class AddColumnToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :message, :text
  end
end
