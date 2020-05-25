import React from "react";
import LibraryData from "../../data/LibraryData";
import DesktopLibraryCard from "./DesktopLibraryCard";

const DesktopLibraryList = () => {
  return (
    <div className="desktopLibrary">
      {LibraryData.map((ele) => (
        <DesktopLibraryCard key={ele.id} event={ele} />
      ))}
    </div>
  );
};

export default DesktopLibraryList;
