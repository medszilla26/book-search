import { Router } from "express";
import React from "react";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
