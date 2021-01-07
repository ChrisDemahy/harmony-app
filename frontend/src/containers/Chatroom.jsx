import React, { useEffect } from "react";
import Post from "../components/Post";

const Chatroom = ({ posts }) => {
  useEffect(() => {});

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
