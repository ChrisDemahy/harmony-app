import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import chatroomReducer from "./reducers/chatroomReducer";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    chatroomState: chatroomReducer,
    // messageState: messageReducer,
    // chatroomState: chatroomReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
