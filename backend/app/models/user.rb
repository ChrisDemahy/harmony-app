class User < ApplicationRecord
  has_many :posts
  has_and_belongs_to_many :memberships, class_name: "Chatroom", foreign_key: "user_id",  join_table: "memberships"
end
