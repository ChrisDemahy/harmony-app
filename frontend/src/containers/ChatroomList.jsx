import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatrooms, changeChatroom } from "../lib/apiClient";

const ChatroomList = ({ rooms }) => {
  const chatrooms = useSelector((state) => state.chatroomState.chatrooms);
  const chatroom = useSelector((state) => state.chatroomState.currentChatroom);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChatrooms);
    changeChatroom(dispatch, chatrooms[0]);
    console.log(chatroom);
  }, [dispatch]);

  let URL = process.env.REACT_APP_BACKEND_URL;
  return (
    <aside className="menu column is-2">
      <p className="menu-label">Text Channels</p>
      <ul className="menu-list">
        {chatrooms &&
          chatrooms.map((chatroom) => {
            return (
              <li key={chatroom.id}>
                {/* <a>{chatroom.name}</a> */}
              </li>
            );
          })}
        <li>
          <a className="button is-info">New Channel</a>
        </li>
      </ul>
      <p className="menu-label">Voice Channels</p>
      <ul className="menu-list">
        <li>
          {/* <a>Team 1</a> */}
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

// const mapStateToProps = (state) => {
//   return {
//     currentChatroom: state.chatroomState.currentChatroom,
//     currentUser: state.userState.currentUser,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   changeChatroom: (chatroom) => dispatch(changeChatroom(chatroom)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ChatroomList);
