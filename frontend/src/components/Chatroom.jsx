import React, { useEffect, useState } from "react";
import Post from "./Post";

const socketClient = new WebSocket("ws://localhost:3000/cable");

// Must Receive User & Chatroom object
const Chatroom = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    socketClient.onopen = (event) => {
      const message = {
        command: "subscribe",
        identifier: JSON.stringify({ channel: "PostChannel", id: 2 }),
      };
      socketClient.send(JSON.stringify(message));
    };

    socketClient.onmessage = (event) => {
      let serverResponse = JSON.parse(event.data);

      if (serverResponse.type === "ping") return;

      const data = serverResponse.message;

      if (data && data.type === "all_posts") {
        setPosts(data.post_history);
        // console.log(data)
      }
      if (data && data.type === "new_post") {
        const incomingPost = data.post;
        setPosts((prevPosts) => [...prevPosts, incomingPost]);
        // console.log(data)
      }
    };
  }, []);

  return (
    <div className="container column is-10">
      <div className="section">
        {/* {console.log(posts)} */}
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Chatroom;
