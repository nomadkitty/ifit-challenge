import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

//import components
import ProductNav from "./components/ProductNav/ProductNav.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ProductNav />
        </header>
      </div>
    </Router>
  );
}

export default App;
