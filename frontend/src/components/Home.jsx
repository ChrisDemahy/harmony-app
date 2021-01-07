import React from "react";

import ChatroomList from "./ChatroomList";
import Chatroom from "./Chatroom";
import NavBar from "./NavBar";
import { withRouter } from "react-router";
import { connect } from "react-redux";



  // Load up the chatrooms
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.chatrooms);
        this.setState({
          chatrooms: data.chatrooms,
        });
      });
  }






  render() {
    return (
      <div>
        <NavBar
          user={this.props.currentUser}
          handleLogout={this.handleLogout}
        />
        <ChatroomList rooms={this.state.chatrooms} />
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

const mapStateToProps = (state) => {
  return { currentUser: state.userState.currentUser };
};

// export default withRouter(Home);

const ShowTheLocationWithRouter = withRouter(Home);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
