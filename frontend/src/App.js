import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Chatroom from "./containers/Chatroom";
import Home from "./components/Home";
import Login from "./components/Login";


import UserContainer from "./containers/UserContainer";
import ChatroomList from "./containers/ChatroomList";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    let user_id = this.props.currentUser.id;
    return (
      <Router>
        <header>
          <Nav />
        </header>
        <main className="section">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {user_id == null ? <Redirect to="/login" /> : <Redirect to="/" />}
            <Route path="/chatrooms" children={<ChatroomList />} />
            <Route path="/chatroom/:id">
              <div class="columns">
                <ChatroomList className="column" />
                <div className="column">
                  <Chatroom />
                </div>
                <UserContainer />
              </div>
            </Route>
            <Route path="/users">
              <UserContainer />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }

}

const mapStateToProps = (state) => {
  return { currentUser: state.userState.currentUser };
};

export default connect(mapStateToProps)(App);
