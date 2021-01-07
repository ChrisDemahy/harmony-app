import React, { useEffect } from "react";
import Post from "../components/Post";

const Chatroom = ({ posts }) => {
    useEffect(() => {});

    return (
        <div className="container">
            {posts.map((post) => {
                return <Post post={post} />;
            })}
        </div>
    );
};

export default Chatroom;
