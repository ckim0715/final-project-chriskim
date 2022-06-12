class AddMessageToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :message, :text
  end
end
