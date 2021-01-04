# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Post.destroy_all
UserChatroom.destroy_all
Chatroom.destroy_all

u1 = User.create(username: 'Michael', password: 'hunter2')
u2 = User.create(username: 'Johnny', password: 'hunter2')
u3 = User.create(username: 'Tania', password: 'hunter2')

c1 = Chatroom.create(name: 'Golf')
c2 = Chatroom.create(name: 'Golf')

uc1 = UserChatroom.create(user_id: u1.id, chatroom_id: c1.id)
uc2 = UserChatroom.create(user_id: u2.id, chatroom_id: c1.id)

uc3 = UserChatroom.create(user_id: u2.id, chatroom_id: c2.id)
uc4 = UserChatroom.create(user_id: u3.id, chatroom_id: c2.id)

p1 = Post.create(content: 'Hello Johnny from Exercise', user_id: u1.id, chatroom_id: c1.id)
p2 = Post.create(content: 'Hello Michael from Exercise!', user_id: u2.id, chatroom_id: c1.id)

p3 = Post.create(content: 'Hello Tania from Golf!', user_id: u2.id, chatroom_id: c2.id)
p4 = Post.create(content: 'Hello Johny from Golf!', user_id: u3.id, chatroom_id: c2.id)