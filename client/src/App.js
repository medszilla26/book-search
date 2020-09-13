import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Saved from "./pages/saved";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/search" component={Search}>
            <Search />
          </Route>
          <Route exact path="/saved" component={Saved}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
