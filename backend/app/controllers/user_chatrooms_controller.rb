class UserChatroomsController < ApplicationController
  before_action :set_user_chatroom, only: [:show, :update, :destroy]

  # GET /user_chatrooms
  def index
    @user_chatrooms = UserChatroom.all

    render json: @user_chatrooms
  end

  # GET /user_chatrooms/1
  def show
    render json: @user_chatroom
  end

  # POST /user_chatrooms
  def create
    @user_chatroom = UserChatroom.new(user_chatroom_params)

    if @user_chatroom.save
      render json: @user_chatroom, status: :created, location: @user_chatroom
    else
      render json: @user_chatroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_chatrooms/1
  def update
    if @user_chatroom.update(user_chatroom_params)
      render json: @user_chatroom
    else
      render json: @user_chatroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_chatrooms/1
  def destroy
    @user_chatroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_chatroom
      @user_chatroom = UserChatroom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_chatroom_params
      params.require(:user_chatroom).permit(:user_id, :chatroom_id)
    end
end
