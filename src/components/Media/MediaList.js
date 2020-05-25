import React, { useState } from "react";
import MediaData from "../../data/MediaData";
import MediaCard from "./MediaCard";

const MediaList = () => {
  const [slide, setSlide] = useState();

  return (
    <div className="mediaList">
      {MediaData.map((ele) => (
        <MediaCard key={ele.id} review={ele} />
      ))}
    </div>
  );
};

export default MediaList;
