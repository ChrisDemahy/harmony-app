import React from "react";
import ChatroomList from "./ChatroomList";
import Chatroom from "./Chatroom";
import NavBar from "./NavBar";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    chatrooms: [],
    posts: [],
  };

  // LOAD UP THE POSTS
  componentDidMount() {
    fetch(`http://localhost:3000/chatrooms/1`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.posts);
        this.setState({
          posts: data.posts,
        });
      });
  }

  // // Load up the chatrooms
  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data.chatrooms);
  //       this.setState({
  //         chatrooms: data.chatrooms,
  //       });
  //     });
  // }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.setUser(null);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <NavBar
          user={this.props.currentUser}
          handleLogout={this.handleLogout}
        />
        <section className="main-content columns is-fullheight">
          <ChatroomList rooms={this.state.chatrooms} />
          <Chatroom posts={this.state.posts} />
        </section>
        {/* TEXT FORM */}
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
