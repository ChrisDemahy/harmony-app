import React from "react";

const ChatroomList = ({ rooms }) => {
  // return rooms.map((room) => <div>{room.name}</div>);
  return (
    <div className="section">
      <div className="columns is-mobile">
        <aside className="column is-2 aside">
          <label className="menu-label">Chatroom List</label>
          <ul className="menu-list">
            {rooms.map((room) => (
              <li key={room.id}>
                <a>{room.name}</a>
              </li>
            ))}
          </ul>
          <a className="button is-success is-block is-bold">Create New Room</a>
        </aside>
      </div>
    </div>
  );
};

export default ChatroomList;
