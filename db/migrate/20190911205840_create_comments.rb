class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.integer :parent_comment_id
      t.index :user_id
      t.index :post_id
      t.timestamps
    end
  end
end
