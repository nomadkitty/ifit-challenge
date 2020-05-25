import React from "react";
import { Link } from "react-router-dom";

const MainNav = (props) => {
  return (
    <div className="main-nav">
      <img
        src={require("../../assets/images/iFit_coach_logo.png")}
        alt="iFit Coach logo"
      />
      <nav>
        <Link to="#">EXERCISE</Link>
        <Link to="#">NUTRITION</Link>
        <Link to="#">ACTIVITY</Link>
        <Link to="#">SLEEP</Link>
      </nav>
      <button>SIGN UP</button>
    </div>
  );
};

export default MainNav;
