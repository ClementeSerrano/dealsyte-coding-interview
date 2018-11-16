import React from "react";
import { Switch, Route } from "react-router-dom";
import Questions from "../pages/Questions";
import Discussions from "../pages/Discussions";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route exact path="/discussions" component={Discussions} />
      </Switch>
    </div>
  );
};
