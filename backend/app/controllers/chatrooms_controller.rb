class ChatroomsController < ApplicationController
  before_action :set_chatroom, only: %i[show update destroy]

  # GET /chatrooms
  def index
    @chatrooms = Chatroom.all
    render json: @chatrooms
    # @chatrooms.filter { |room| room.users.include?(current_user) }
    # render json: @chatrooms,
    #        include: [
    #          posts: { include: [user: { except: %i[password_digest] }] }
    #        ]
  end

  # GET /chatrooms/1
  def show
    posts = @chatroom.posts.map{ |post, user| user=post.user.username, post }
    
    # posts =
    #   @chatroom.posts.map do |post, user|
    #     user = [post.user.username, post.user.avatar], post
    #   end
    render json: { chatroom: @chatroom, posts: posts }
  end

  # POST /chatrooms
  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      render json: @chatroom, status: :created, location: @chatroom
    else
      render json: @chatroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chatrooms/1
  def update
    if @chatroom.update(chatroom_params)
      render json: @chatroom
    else
      render json: @chatroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chatrooms/1
  def destroy
    @chatroom.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def chatroom_params
    params.require(:chatroom).permit(:name)
  end
end
