import React, { useEffect } from "react";
import Chatroom from "./Chatroom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeChatroom } from "../lib/apiClient";

export default function ChatroomContainer() {
  const c = useSelector((state) => state.chatroomState.currentChatroom);
  const chatrooms = useSelector((state) => state.chatroomState.chatrooms);
  const { id } = useParams();
  const chatroom = chatrooms.find((room) => room.id == id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_CURRENT_CHATROOM", chatroom: chatroom });
  });

  return (
    <>
      <Chatroom />
    </>
  );
}
