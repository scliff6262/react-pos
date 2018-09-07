class CreateCheckItems < ActiveRecord::Migration[5.2]
  def change
    create_table :check_items do |t|
      t.integer :check_id
      t.integer :item_id

      t.timestamps
    end
  end
end
