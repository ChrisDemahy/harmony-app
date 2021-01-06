import React from "react";

const NavBar = ({ user, handleLogout }) => {
  console.log(user);
  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            {/* <a className="container title is-4 has-text-white">harmony💬</a> */}
          </div>
          <div className="navbar-item">
            <div className="container">
              <input
                className="input"
                type="text"
                placeholder="Search feature goes here.."
              />
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {/* <a className="container title is-4 has-text-primary"> */}
              {/* {user.username} */}
            {/* </a> */}
          </div>
          {/* <a className="navbar-item subtitle is-6" onClick={handleLogout}>
            Log Out
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
