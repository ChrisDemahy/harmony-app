const URL = "http://localhost:3000";

// Thunk function to fetch all chatrooms
async function fetchChatrooms(dispatch, getState) {
    const response = await fetch(URL + "/chatrooms");
    const data = await response.json();
    dispatch({ type: "SET_CHATROOMS", chatrooms: data });
}
export { fetchChatrooms };
