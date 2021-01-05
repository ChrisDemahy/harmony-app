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
        <aside className="menu">
            <p className="menu-label">Text Channels</p>
            <ul className="menu-list">
                {chatrooms &&
                    chatrooms.map((chatroom) => {
                        return (
                            <li>
                                <a>{chatroom.name}</a>
                            </li>
                        );
                    })}
            </ul>
            <p className="menu-label">Voice Channels</p>
            <ul className="menu-list">
                <li>
                    <a>Team 1</a>
                </li>
                {/* <li>
                    <a className="is-active">Manage Your Team</a>
                    <ul>
                        <li>
                            <a>Members</a>
                        </li>
                        <li>
                            <a>Plugins</a>
                        </li>
                        <li>
                            <a>Add a member</a>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </aside>
    );
};

export default ChatroomList;
