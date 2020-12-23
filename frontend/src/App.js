import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chatroom from "./components/Chatroom";
import Home from "./components/Home";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="container">
        <Router>
          <Switch>
            <Route path="/chatroom/:id" children={<Chatroom />} />
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
