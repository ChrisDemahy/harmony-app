class Chatroom < ApplicationRecord
  has_many :posts
  has_many :user_chatrooms
  has_many :users, through: :user_chatrooms
end
