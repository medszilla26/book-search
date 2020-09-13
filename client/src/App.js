import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <h1>Hello</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
