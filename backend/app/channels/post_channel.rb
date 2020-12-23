class PostChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'post_channel'
    ActionCable.server.broadcast('post_channel', type: 'all_posts', post_history: Post.all)
  end
  
  def send_post(data)
    new_post = Post.create(content: data["content"], user_id: data["user_id"], chatroom_id: data["chatroom_id"])
    ActionCable.server.broadcast('post_channel', type: 'new_post', post: new_post)
  end
end