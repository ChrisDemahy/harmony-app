import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <p className="section">Harmony, a messaging app for awesome people.</p>
      <Link to="/chatrooms">Chatrooms</Link>
    </div>
  );
};

export default Home;
