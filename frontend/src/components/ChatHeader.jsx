import React from "react";

const ChatHeader = () => {
  return (
    <nav className="level">
      {/* Left Side */}
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </div>
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Find a post" />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="level-right">
        <p className="level-item">
          <strong>All</strong>
        </p>
        <p className="level-item">
          <a>Published</a>
        </p>
        <p className="level-item">
          <a>Drafts</a>
        </p>
        <p className="level-item">
          <a>Deleted</a>
        </p>
        <p className="level-item">
          <a className="button is-success">New</a>
        </p>
      </div>
    </nav>
  );
};

export default ChatHeader;