class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :name
      t.text :category
      t.integer :price
      
      t.timestamps
    end
  end
end
