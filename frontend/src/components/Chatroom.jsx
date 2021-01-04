import React, { useEffect, useState } from "react";
import Post from "./Post";

const Chatroom = ({ posts }) => {
  console.log(posts);
  // Container to show all the posts
  // Takes an array of post objects as props
  // Declare a new state variable, which we'll call "count"
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate:
    // Handles subscribing to a Chatroom via websockets
    // function handleStatusChange(status) {
    // setIsOnline(status.isOnline);
    // }
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    // Specifically, unsubscribe from
    // return function cleanup() {
    // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
  });

  return (
    <div className="container">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Chatroom;
