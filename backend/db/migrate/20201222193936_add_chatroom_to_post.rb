class AddChatroomToPost < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :chatroom, null: false, foreign_key: true
  end
end
