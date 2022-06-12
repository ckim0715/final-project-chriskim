class RenameTypeColumnInProducts < ActiveRecord::Migration[6.1]
  def change
    rename_column :products, :type, :part_type
  end
end
