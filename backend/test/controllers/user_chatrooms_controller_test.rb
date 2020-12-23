require 'test_helper'

class UserChatroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_chatroom = user_chatrooms(:one)
  end

  test "should get index" do
    get user_chatrooms_url, as: :json
    assert_response :success
  end

  test "should create user_chatroom" do
    assert_difference('UserChatroom.count') do
      post user_chatrooms_url, params: { user_chatroom: { Chatroom_id: @user_chatroom.Chatroom_id, User_id: @user_chatroom.User_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_chatroom" do
    get user_chatroom_url(@user_chatroom), as: :json
    assert_response :success
  end

  test "should update user_chatroom" do
    patch user_chatroom_url(@user_chatroom), params: { user_chatroom: { Chatroom_id: @user_chatroom.Chatroom_id, User_id: @user_chatroom.User_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_chatroom" do
    assert_difference('UserChatroom.count', -1) do
      delete user_chatroom_url(@user_chatroom), as: :json
    end

    assert_response 204
  end
end
