const initialState = {
  chatrooms: [],
  currentChatroom: {
    id: null,
    name: "",
  },
};

const chatroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHATROOMS":
      // console.log(action)
      return {
        ...state,
        chatrooms: action.chatrooms,
      };
    case "CHANGE_CURRENT_CHATROOM":
      return {
        ...state,
        currentChatroom: action.chatroom,
      };
    case "UPDATE_CHATROOMS":
      return {
        ...state,
        chatrooms: state.chatrooms.map((chatroom) => {
          if (chatroom.id === action.chatroom.id) {
            return action.chatroom;
          } else {
            return chatroom;
          }
        }),
      };
    case "DELETE_CHATROOM":
      return {
        ...state,
        chatrooms: state.chatrooms.filter((chatroom) => {
          return !(chatroom.id === action.chatroom.id);
        }),
      };
    default:
      return state;
  }
};
export default chatroomReducer;
