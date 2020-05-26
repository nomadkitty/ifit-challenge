import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.scss";

//import components
import ProductNav from "./components/ProductNav/ProductNav";
import MainNav from "./components/MainNav/MainNav";
import Hero from "./components/Hero/Hero";
import MediaList from "./components/Media/MediaList";
import DesktopLibraryList from "./components/DesktopLibrary/DesktopLibraryList";
import EquipmentList from "./components/Equipment/EquipmentList";

function App() {
  return (
    <div className="App">
      <header>
        <ProductNav />
        <MainNav />
      </header>
      <Hero />
      <MediaList />
      <DesktopLibraryList />
      <EquipmentList />
    </div>
  );
}

export default App;
