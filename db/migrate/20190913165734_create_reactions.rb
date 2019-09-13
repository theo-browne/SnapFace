class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.string :reaction_type, null: false
      t.integer :user_id, null: false
      t.integer :reacted_id, null: false
      t.string :reacted_type, null: false
      t.index :user_id
      t.integer :reacted_id
      t.timestamps
    end
    add_index :reactions, [:user_id, :reacted_id, :reacted_type]
  end
end
