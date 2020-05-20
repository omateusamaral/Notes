import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Singup from "./Pages/SingUp";
import Dashboard from "./Pages/Dashboard";
import Newnote from "./Pages/NewNote";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/" exact component={Singup} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/" exact component={Newnote} />
      </Switch>
    </BrowserRouter>
  );
}
