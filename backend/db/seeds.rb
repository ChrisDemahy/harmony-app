# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"

User.destroy_all
Post.destroy_all
UserChatroom.destroy_all
Chatroom.destroy_all

u1 = User.create(username: "michael", password: "123")
u2 = User.create(username: "jim", password: "123")
u3 = User.create(username: "pam", password: "123")

u4 = User.create(username: "walter", password: "123")
u5 = User.create(username: "jesse", password: "123")

u3 = User.create(username: "test", password: "123")

c1 = Chatroom.create(name: "The Office")
c2 = Chatroom.create(name: "Breaking Bad")

uc1 = UserChatroom.create(user_id: u1.id, chatroom_id: c1.id)
uc2 = UserChatroom.create(user_id: u2.id, chatroom_id: c1.id)
uc3 = UserChatroom.create(user_id: u3.id, chatroom_id: c1.id)

uc3 = UserChatroom.create(user_id: u1.id, chatroom_id: c2.id)
uc3 = UserChatroom.create(user_id: u4.id, chatroom_id: c2.id)
uc4 = UserChatroom.create(user_id: u5.id, chatroom_id: c2.id)

# michael quotes
Post.create(content: "Everybody stay calm!", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "And I knew exactly what to do.", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "I don't want to do anything, I am dying.", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "I hate looking at your face.", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "Should have burned this place down when I had a chance.", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "Wikipedia is the best thing ever", user_id: u1.id, chatroom_id: c1.id)
Post.create(content: "What am I doing here?", user_id: u1.id, chatroom_id: c2.id)

# jim
5.times {
  Post.create(
    content: Faker::Lorem.sentence,
    user_id: u2.id, chatroom_id: c1.id
  )
}

# pam 
5.times {
  Post.create(
    content: Faker::Lorem.question,
    user_id: u3.id, chatroom_id: c1.id
  )
}

# walter
Post.create(content: "If you don't know who I am, then maybe your best course would be to tread lightly.", user_id: u4.id, chatroom_id: c2.id)
Post.create(content: "You clearly don't know who you're talking to, so let me clue you in.", user_id: u4.id, chatroom_id: c2.id)
Post.create(content: "Say my name.", user_id: u4.id, chatroom_id: c2.id)

# jesse
Post.create(content: "SCIENCE!!!", user_id: u5.id, chatroom_id: c2.id)
5.times{
  Post.create(
    content: Faker::Lorem.sentence,
    user_id: u5.id, chatroom_id: c2.id
  )
}
