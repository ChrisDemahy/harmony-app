import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import chatroomReducer from "./reducers/chatroomReducer";
import userReducer from "./reducers/userReducer";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import unreadReducer from "./reducers/unreadPostReducer";

const rootReducer = combineReducers({
    chatroomState: chatroomReducer,
    // messageState: messageReducer,
    userState: userReducer,
    unreadState: unreadReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
