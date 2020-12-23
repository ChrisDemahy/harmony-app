class User < ApplicationRecord
  has_many :posts
  has_many :user_chatrooms
  has_many :channels, through: :user_chatrooms
end
