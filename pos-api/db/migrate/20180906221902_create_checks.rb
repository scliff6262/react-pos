class CreateChecks < ActiveRecord::Migration[5.2]
  def change
    create_table :checks do |t|
      t.integer :table_number
      t.integer :subtotal
      t.boolean :active
      
      t.timestamps
    end
  end
end
