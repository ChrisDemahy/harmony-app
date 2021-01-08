const URL = process.env.REACT_APP_BACKEND_URL;

// Thunk function to fetch all chatrooms
async function fetchChatrooms(dispatch, getState) {
  const response = await fetch(URL + "/chatrooms");
  const data = await response.json();
  dispatch({ type: "SET_CHATROOMS", chatrooms: data });
}

// Thunk function to fetch all users
async function fetchUsers(dispatch, getState) {
  const response = await fetch(URL + "/users");
  const data = await response.json();
  dispatch({ type: "SET_USERS", users: data });
}

async function changeChatroom(dispatch, chatroom) {
  dispatch({ type: "CHANGE_CURRENT_CHATROOM", chatroom: chatroom });
}

export { fetchUsers, fetchChatrooms, changeChatroom };
