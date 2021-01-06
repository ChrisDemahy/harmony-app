class AuthController < ApplicationController
  
  # BEFORE 
  # def login
  #   user = User.find_by(username: params[:username])
  #   if (user && user.authenticate(params[:password]))
  #     render json: { user: user} 
  #   else
  #     render json: { errors: "Invalid Username" }
  #   end
  # end

  # AFTER
  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      payload = { user_id: @user.id }
      token = JWT.encode(payload, "harmony")
      render json: { auth_key: token, user: @user }, status: :ok
    else
      render json: { error: "Login Failed" }, status: :unprocessable_entity
    end
  end

end
