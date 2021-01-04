import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatrooms } from "../lib/apiClient";

const ChatroomList = ({ rooms }) => {
    const chatrooms = useSelector((state) => state.chatroomState.chatrooms);
    console.log(chatrooms);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChatrooms);
    }, [dispatch]);

    return (
        <div className="section">
            <div className="columns is-mobile">
                <aside className="column is-2 aside">
                    <label className="menu-label">Chatroom List</label>
                    <ul className="menu-list">
                        {chatrooms &&
                            chatrooms.map((room) => (
                                <li key={room.id}>
                                    <a>{room.name}</a>
                                </li>
                            ))}
                    </ul>
                    <a className="button is-success is-block is-bold">
                        Create New Room
                    </a>
                </aside>
            </div>
        </div>
    );
};

export default ChatroomList;
