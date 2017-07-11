class AddPriorityToSpreeProducts < ActiveRecord::Migration[5.0]
  def self.up
    add_column :spree_products, :priority, :integer, default: 11
  end
  def self.down
    remove_column :spree_products, :priority
  end
end
