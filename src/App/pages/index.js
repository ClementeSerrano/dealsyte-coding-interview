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

  handleUserSignIn = userLoggedIn => {
    alert("Welcome " + userLoggedIn + "!");
    this.setState({ userLoggedIn: userLoggedIn });
  };

  render() {
    const { userLoggedIn } = this.state;

    return (
      <div>
        <Navbar userLoggedIn={userLoggedIn} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SingIn onclick={this.handleUserSignIn} user={userLoggedIn} />
            )}
          />
          <Route
            exact
            path="/questions"
            render={() => <Questions userLoggedIn={userLoggedIn} />}
          />
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
