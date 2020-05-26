import React from "react";
import EquipmentData from "../../data/EquipmentData";
import EquipmentCard from "./EquipmentCard";

const EquipmentList = () => {
  return (
    <div className="equipment">
      <h4>Interested in our exciting iFit-enabled equipment?</h4>
      <div className="equipmentbox">
        {EquipmentData.map((ele) => (
          <EquipmentCard key={ele.id} equipment={ele} />
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
