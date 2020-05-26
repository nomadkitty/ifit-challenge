import React from "react";

const MediaCard = (props) => {
  const { name, logo, review } = props.review;

  return (
    <div className="mediaCard">
      <div className="mediaContent">
        {/* <div className="mediaLogo"> */}
        <img src={logo} alt={name} />
        {/* </div> */}
        <p>{`"${review}"`}</p>
      </div>
    </div>
  );
};

export default MediaCard;
