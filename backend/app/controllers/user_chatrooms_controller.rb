class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    #BEFORE
    # render json: @user, include: [:chatrooms, :user_chatrooms]
    
    # AFTER
    render json: @user.to_json(    
      include: [
        { chatrooms: { except: [:created_at, :updated_at] }  },
        { user_chatrooms: { except: [:created_at, :updated_at] } }
      ]
    ) 

  end

  # POST /users
  def create
    @user = User.new(user_params)
    # byebug
    if @user.valid?
      @user.save
      payload = { user_id: @user.id }
      token = JWT.encode(payload, "harmony")
      render json: { auth_key: token, user: @user }, status: :created
    else
      render json: { error: "Invalid User"}, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.permit(:username, :password, :password_confirmation)
      # params.require(:user).permit(:username, password)
    end

end
