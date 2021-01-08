import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { userSignup } from "../actions/authActions";

class Signup extends React.Component {
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
        this.props.userSignup(this.state);
        // if user is verified, redirect to home route
        setTimeout(() => {
            let user_id = this.props.currentUser.id;
            if (user_id != null) {
                this.props.history.push("/home");
            }
        }, 500);
    };

    render() {
        return (
            // <section className="hero is-primary is-fullheight">
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        {/* <h1 className="title is-1 has-text-centered">Welcome to Harmony</h1> */}
                        <h1 className="title is-3 has-text-centered">
                            Sign Up
                        </h1>
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form
                                    className="box has-text-left"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="field">
                                        <label className="label">
                                            Username
                                        </label>
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
                                                <FontAwesomeIcon
                                                    style={{
                                                        height: "20px",
                                                        width: "20px",
                                                    }}
                                                    icon={faEnvelope}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">
                                            Password
                                        </label>
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
                                                <FontAwesomeIcon
                                                    style={{
                                                        height: "20px",
                                                        width: "20px",
                                                    }}
                                                    icon={faLock}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <button className="button is-success">
                                            Signup
                                        </button>
                                    </div>
                                </form>
                                <div className="button">
                                    <a href="/login">Back to Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userSignup: (userInfo) => dispatch(userSignup(userInfo)),
});

// export default withRouter(Signup);
const ShowTheLocationWithRouter = withRouter(Signup);
export default connect(null, mapDispatchToProps)(ShowTheLocationWithRouter);
