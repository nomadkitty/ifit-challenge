import React from "react";

const MediaCard = (props) => {
  const { name, logo, review } = props.review;

  return (
    <div className="mediaCard">
      {/* <img src={require(logo)} alt={name} /> */}
      <p>{review}</p>
    </div>
  );
};

export default MediaCard;
