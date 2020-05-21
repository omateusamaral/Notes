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
        <Route path="/singup" exact component={Singup} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/createnote" exact component={Newnote} />
      </Switch>
    </BrowserRouter>
  );
}
