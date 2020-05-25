import React from "react";
import { Card, Image } from "semantic-ui-react";

const DesktopLibraryCard = (props) => {
  const { img, title, avatar, time, distance, workouts } = props.event;
  return (
    <Card>
      <Image src={img} wrapped ui={false} alt={title} />
      <Card.Content>
        <Image floated="right" size="mini" src={avatar} />
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {time} {distance}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default DesktopLibraryCard;
