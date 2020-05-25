import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={require("../../assets/images/gmapsinworkout.jpeg")}
        alt="hero"
      />
      <div className="heroContent">
        <h1>
          The best personal training, <br /> right in your own home
        </h1>
        <button>JOIN IFIT COACH</button>
      </div>
    </div>
  );
};

export default Hero;
