import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";

const socketClient = new WebSocket("ws://localhost:3000/cable");

// Must Receive User & Chatroom object
const Chatroom = ({ chatroom }) => {
  console.log(chatroom);
  // const chatroom = useSelector((state) => state.chatroomState.currentChatroom);
  // const user = useSelector((state) => state.userState.currentUser);

  let [user_id, chatroom_id] = [2, 1];

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    socketClient.onopen = (event) => {
      const message = {
        command: "subscribe",
        identifier: JSON.stringify({ channel: "PostChannel", id: chatroom_id }),
      };
      socketClient.send(JSON.stringify(message));
    };

    socketClient.onmessage = (event) => {
      let serverResponse = JSON.parse(event.data);

      if (serverResponse.type === "ping") return;

      const data = serverResponse.message;

      if (data && data.type === "all_posts") {
        setPosts(data.post_history);
      }
      if (data && data.type === "new_post") {
        const incomingPost = data.post;
        setPosts((prevPosts) => [...prevPosts, incomingPost]);
      }
    };
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    const message = {
      command: "message",
      identifier: JSON.stringify({ channel: "PostChannel", id: 1 }),
      data: JSON.stringify({
        action: "send_post",
        content: newPost,
        user_id: user_id,
        chatroom_id: chatroom_id,
      }),
    };
    socketClient.send(JSON.stringify(message));
    setNewPost("");
    // console.log("activity sent:", newPost);
  };

  return (
    <div className="container column is-10">
      <div className="section">
        {/* {console.log(posts)} */}
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
