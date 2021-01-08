import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chatroom from "./containers/Chatroom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserContainer from "./containers/UserContainer";
import ChatroomList from "./containers/ChatroomList";
import Nav from "./components/Nav";
import { useSelector } from "react-redux";
import ChatroomContainer from "./containers/ChatroomContainer";
const App = () => {
  // const currentChatroom = useSelector(
  //     (state) => state.chatroomState.currentChatroom
  // );
  const user = useSelector((state) => state.userState.currentUser);
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main className="section">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/chatrooms">
            <div className="columns">
              <div className="column is-one-fifths">
                <ChatroomList />
              </div>
              <div className="column is-three-fifths">
                <Switch>
                  <Route path="/chatrooms/:id">
                    <Chatroom />
                    {/* <ChatroomContainer /> */}
                  </Route>
                  <Route path="/">
                    Choose a chatroom on the left to get started!
                  </Route>
                </Switch>
              </div>
              <div className="column is-one-fifths">
                {/* <UserContainer /> */}
              </div>
            </div>
          </Route>
          {user.id == null ? <Redirect to="/login" /> : <Redirect to="/" />}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
