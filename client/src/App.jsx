import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Platforms from "./pages/platforms";
import Home from "./pages/home";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Platforms />
    </Switch>
  );
}
