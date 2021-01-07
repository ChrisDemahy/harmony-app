class User < ApplicationRecord
  has_many :posts
  has_many :user_chatrooms
  has_many :chatrooms, through: :user_chatrooms

  has_secure_password
  
  validates :username, { presence: true, uniqueness: true}
end
