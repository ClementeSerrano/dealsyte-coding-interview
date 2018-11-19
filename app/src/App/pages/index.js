import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SingIn from "./SignIn";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Discussions from "./Discussions";

export default class extends Component {
  state = {
    userLoggedIn: null
  };

  handleUserSignIn = e => {
    e.preventDefault();
    alert("yeah!");
    this.setState({ userLoggedIn: "pico" });
  };

  render() {
    if (this.state.userLoggedIn === null) {
      return <SingIn onclick={this.handleUserSignIn} />;
    } else {
      return (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route
              exact
              path="/discussions/:id/:author/:date/:question"
              render={({ match }) => (
                <Discussions
                  id={match.params.id}
                  author={match.params.author}
                  date={match.params.date}
                  question={match.params.question}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}
