import React from "react";
import ChatroomList from "./ChatroomList";

import NavBar from "./NavBar";
import { withRouter } from "react-router";

class Home extends React.Component {
  state = {
    chatrooms: [],
  };

  // Load up the chatrooms
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.user.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.chatrooms);
        this.setState({
          chatrooms: data.chatrooms,
        });
      });
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.setUser(null);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <NavBar user={this.props.user} handleLogout={this.handleLogout} />
        {/* <div className="box">
          <h1 className="title is-1 has-text-centered">
            Welcome {this.props.user.username}
          </h1>
          <button className="button" onClick={this.handleLogout}>
            Log Out
          </button>
        </div> */}
        <ChatroomList rooms={this.state.chatrooms} />
        {/* const Chat = ({saveMsg}) => ( */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
          }}
        >
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                name="userInput"
                type="text"
                placeholder="Type your message"
              />
            </div>
            <div className="control">
              <button className="button is-info">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Home);

// const Home = () => {
//   return (
//     <div>
//       <p className="section">Harmony, a messaging app for awesome people.</p>
//     </div>
//   );
// };

// export default Home;
