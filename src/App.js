import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Home from "./dashboard/home/Home";
import Error404 from './dashboard/error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
