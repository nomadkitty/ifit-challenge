import React from "react";
import "./styles/index.scss";

//import components
import ProductNav from "./components/ProductNav/ProductNav";
import MainNav from "./components/MainNav/MainNav";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <header>
        <ProductNav />
        <MainNav />
      </header>
      <Hero />
    </div>
  );
}

export default App;
