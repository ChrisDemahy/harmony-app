class PostChannel < ApplicationCable::Channel
  # BEFORE
  # def subscribed
  #   stream_from 'post_channel'
  #   ActionCable.server.broadcast('post_channel', type: 'all_posts', post_history: Post.all)
  # end

  def subscribed
    stream_from 'post_channel'
    @chatroom = Chatroom.find(params[:id])
    posts = @chatroom.posts.map{ |post, user| user=[post.user.username, post.user.avatar], post }
    ActionCable.server.broadcast('post_channel', type: 'all_posts', post_history: posts)
  end
  
  def send_post(data)
    new_post = Post.create(content: data["content"], user_id: data["user_id"], chatroom_id: data["chatroom_id"])
    ActionCable.server.broadcast('post_channel', type: 'new_post', post: new_post)
  end
  
end