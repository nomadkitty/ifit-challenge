import React from "react";

const EquipmentCard = (props) => {
  const { name, img } = props.equipment;
  return (
    <div className="equipmentCard">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default EquipmentCard;
