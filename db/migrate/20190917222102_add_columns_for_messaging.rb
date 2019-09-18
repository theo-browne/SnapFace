class AddColumnsForMessaging < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :user_id, :integer, null: false
    add_column :messages, :room_id, :integer, null: false
    add_column :friendships, :room_id, :integer, null: false
  end
end
