import React from "react";
import { withRouter } from "react-router";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    };

    fetch("http://localhost:3000/login", options)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("userId", data.user.id);
        this.props.setUser(data.user);
        this.props.history.push("/home");
      });

    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      // <section className="hero is-primary is-fullheight">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            {/* <h1 className="title is-1 has-text-centered">Welcome to Harmony</h1> */}
            <h1 className="title is-3 has-text-centered">Login</h1>
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form
                  className="box has-text-left"
                  onSubmit={this.handleSubmit}
                >
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        placeholder="username"
                        className="input"
                        required
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      // <div>
      //   <h1 className="is-title">Login</h1>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>Username: </label>
      //     <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
      //     <label>Password: </label>
      //     <input type="current-password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
      //     <button>Login</button>
      //   </form>
      // </div>
    );
  }
}

// export default Login;
export default withRouter(Login);
