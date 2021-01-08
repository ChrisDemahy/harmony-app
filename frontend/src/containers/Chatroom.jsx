import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeChatroom } from "../lib/apiClient";

const socketClient = new WebSocket("ws://localhost:3000/cable");

// Must Receive User & Chatroom object
const Chatroom = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const chatrooms = useSelector((state) => state.chatroomState.chatrooms);
  const currentChatroom = useSelector(
    (state) => state.chatroomState.currentChatroom
  );
  const currentUser = useSelector((state) => state.userState.currentUser);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "CHANGE_CURRENT_CHATROOM",
      chatroom: chatrooms.find((room) => room.id == id),
    });
    if (currentChatroom !== undefined) {
      console.log("asdfsaf");
      socketClient.onopen = (event) => {
        const message = {
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "PostChannel",
            id: currentChatroom.id,
          }),
        };
        socketClient.send(JSON.stringify(message));
      };

      socketClient.onmessage = (event) => {
        let serverResponse = JSON.parse(event.data);

        if (serverResponse.type === "ping") return;

        const data = serverResponse.message;

        if (data && data.type === "all_posts") {
          console.log(data);
          setPosts(data.post_history);
        }
        if (data && data.type === "new_post") {
          const incomingPost = data.post;
          setPosts((prevPosts) => [...prevPosts, incomingPost]);
        }
      };
    }
    // }, [dispatch, socketClient, currentChatroom]);
  });

  const sendPost = (e) => {
    e.preventDefault();
    const message = {
      command: "message",
      identifier: JSON.stringify({ channel: "PostChannel", id: 1 }),
      data: JSON.stringify({
        action: "send_post",
        content: newPost,
        user_id: currentUser.id,
        chatroom_id: currentChatroom.id,
      }),
    };
    socketClient.send(JSON.stringify(message));
    setNewPost("");
    // console.log("activity sent:", newPost);
  };

  return (
    <div className="container column is-10">
      <div className="section">
        {console.log(currentChatroom)}
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
        {/* TEXT FORM */}
        <div className="section">
          <form onSubmit={sendPost}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  name="userInput"
                  type="text"
                  value={newPost}
                  placeholder="Type your message"
                  onChange={(e) => setNewPost(e.target.value)}
                />
              </div>
              <div className="control">
                <button className="button is-info">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
