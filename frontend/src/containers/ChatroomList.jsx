import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChatrooms, changeChatroom } from "../lib/apiClient";

const ChatroomList = ({ rooms }) => {
  const chatrooms = useSelector((state) => state.chatroomState.chatrooms);
  const chatroom = useSelector((state) => state.chatroomState.currentChatroom);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChatrooms);
  }, [dispatch]);

  return (
    <aside className="menu">
      <p className="menu-label">Text Channels</p>
      <ul className="menu-list">
        {/* {console.log(chatrooms)} */}
        {Array.isArray(chatrooms) &&
          chatrooms.map((room) => {
            return (
              <>
                <li key={room.id}>
                  <Link to={`/chatrooms/${room.id}`}>{room.name}</Link>
                </li>
                <br />
              </>
            );
          })}
        <li>{/* <a className="button is-info">New Channel</a> */}</li>
      </ul>
      <p className="menu-label">Voice Channels</p>
      <ul className="menu-list">
        <li>{/* <a>Team 1</a> */}</li>
      </ul>
    </aside>
  );
};

export default ChatroomList;
