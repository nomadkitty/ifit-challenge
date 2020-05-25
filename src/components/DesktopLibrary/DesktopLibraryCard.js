import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import iconTime from "../../assets/icons/Icon--Time--icn_timer_line.png";
import iconMetrics from "../../assets/icons/Icon--Metrics--icn_distance_line.png";
import iconVideo from "../../assets/icons/Icon--Video--icn_playlist.png";

const DesktopLibraryCard = (props) => {
  const { img, title, avatar, time, distance, workouts } = props.event;

  return (
    <Card>
      <div id="workoutImage">
        <Image src={img} wrapped ui={false} alt={title} />
        {workouts && (
          <div className="workoutOverlay">
            <h4>{workouts}</h4>
            <p>WORKOUTS</p>
            <img src={iconVideo} alt="video icon" />
          </div>
        )}
      </div>
      <Card.Content>
        <Image floated="right" size="mini" src={avatar} />
        <Card.Header>{title}</Card.Header>
        {time && (
          <Card.Meta>
            <img src={iconTime} alt="time icon" />
            {time} <img src={iconMetrics} alt="metrics icon" /> {distance}
          </Card.Meta>
        )}
        <Button>VIEW DETAILS</Button>
      </Card.Content>
    </Card>
  );
};

export default DesktopLibraryCard;
