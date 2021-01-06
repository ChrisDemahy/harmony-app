import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Chatroom from "./components/Chatroom";
import Home from "./components/Home";
// import Login from "./components/Login";
import UserContainer from "./components/UserContainer";
import ChatroomList from "./components/ChatroomList";
import Nav from "./components/Nav";

class App extends React.Component {
    state = {
        user: null,
    };

    setUser = (user) => {
        this.setState({
            user: user,
        });
    };

    render() {
        return (
            <Router>
                <header>
                    <Nav />
                </header>
                <main className="section">
                    <Switch>
                        <Route path="/chatrooms" children={<ChatroomList />} />
                        <Route path="/chatroom/:id">
                            <div class="columns">
                                <ChatroomList className="column" />
                                <div className="column">
                                    {/* <Chatroom /> */}
                                </div>
                                <UserContainer />
                            </div>
                        </Route>
                        <Route path="/users">{/* <UserContainer /> */}</Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
