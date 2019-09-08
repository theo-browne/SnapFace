class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.string :status, null: false
      t.index :user_id
      t.index :friend_id
      t.timestamps
    end
  end
end
