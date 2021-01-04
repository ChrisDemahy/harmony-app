import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chatroom from "./components/Chatroom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserContainer from "./components/UserContainer";
import ChatroomList from "./components/ChatroomList";

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
        let posts = [1, 2, 3, 4];
        let users = [1, 2, 3, 4];
        let { user } = this.state;
        return (
            <div className="App">
                {/* <header className="App-header"></header> */}
                <main className="container">
                    <Router>
                        <Switch>
                            <Route
                                path="/chatrooms"
                                children={<ChatroomList />}
                            />
                            <Route path="/chatroom/:id">
                                <div class="columns">
                                    <ChatroomList className="column" />
                                    <Chatroom
                                        posts={posts}
                                        className="column"
                                    />
                                </div>
                            </Route>
                            <Route path="/users">
                                <UserContainer users={users} />
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
}

export default App;
