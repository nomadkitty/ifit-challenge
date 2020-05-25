import React, { useState } from "react";
import Slider from "react-slick";
import MediaData from "../../data/MediaData";
import MediaCard from "./MediaCard";

const MediaList = () => {
  // const [slide, setSlide] = useState();
  const settings = {
    centerMode: true,
    // centerPadding: `50px`,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slideToShow: 3,
    slideToScroll: 1,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    arrows: true,
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
    <>
      <Slider {...settings}>
        {MediaData.map((ele) => (
          <MediaCard key={ele.id} review={ele} />
        ))}
      </Slider>
    </>
  );
};

export default MediaList;
