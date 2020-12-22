# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Chatroom.destroy_all

u1 = User.create(username: "Michael")
u2 = User.create(username: "Johnny")
u3 = User.create(username: "Tania")

c1 = Chatroom.create(name: "M & J", members: [u1, u2])
c2 = Chatroom.create(name: "M & T")

u1.membership << c2
c2.members << u3

p1 = Post.create(content: "Hello Johnny", user: u1, chatroom: c1)
p2 = Post.create(content: "Hello Michael!", user: u2, chatroom: c1)
p3 = Post.create(content: "Hello Tania!", user: u1, chatroom: c2)

