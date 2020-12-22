require 'test_helper'

class ChatroomsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index of all chatrooms' do
    get chatrooms_url
    assert_response :success
    assert_equal 'index', @controller.action_name

    assert_match 'chatrooms', @response.body
    assert_match Chatroom.all.to_json, @response.body
  end

  test 'should get attributes of a single chatroom' do
    @chatroom = Chatroom.all.sample
    get chatrooms_url
    assert_response :success
    assert_equal 'index', @controller.action_name

    assert_match 'chatrooms', @response.body
    assert_match Chatroom.all.to_json, @response.body
  end
end
