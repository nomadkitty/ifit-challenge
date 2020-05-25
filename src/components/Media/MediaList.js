import React from "react";
import Slider from "react-slick";
import MediaData from "../../data/MediaData";
import MediaCard from "./MediaCard";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const MediaList = () => {
  const settings = {
    dots: false,
    infinite: true,
    slideToShow: 3,
    slideToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mediaSlider">
      <Slider {...settings}>
        {MediaData.map((ele) => (
          <MediaCard key={ele.id} review={ele} />
        ))}
      </Slider>
    </div>
  );
};

export default MediaList;
