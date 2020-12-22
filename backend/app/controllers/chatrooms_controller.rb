class ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all
    render json: { message: 'Ok', chatrooms: @chatrooms }, status: :ok
  end
end
