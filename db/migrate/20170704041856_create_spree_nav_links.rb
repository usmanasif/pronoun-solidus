class CreateSpreeNavLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :spree_nav_links do |t|
			t.string :name
			t.string :url
			t.boolean :active
			t.integer :position

      t.timestamps
    end
  end
end
