class Chatroom < ApplicationRecord
  has_many :posts
  has_and_belongs_to_many :members, class_name: "User", foreign_key: "chatroom_id", join_table: "memberships"
end
