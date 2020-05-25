import React from "react";
import { Card, Image } from "semantic-ui-react";

const MediaCard = (props) => {
  const { name, logo, review } = props.review;

  return (
    <Card>
      <Image src={logo} alt={name} />
      <Card.Description>{review}</Card.Description>
    </Card>
  );
};

export default MediaCard;
