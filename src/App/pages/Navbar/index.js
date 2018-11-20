import React, { Component } from "react";
import { Toolbar } from "../../components";

import { Users } from "../../../Resources";

export default class extends Component {
  state = {
    users: null
  };

  render() {
    if (this.state.users === null) {
      return <div />;
    } else {
      return (
        <Toolbar
          links={[
            {
              name: "Home",
              href: "/",
              key: "2"
            }
          ]}
          userLoggedIn={this.props.userLoggedIn}
        />
      );
    }
  }
  componentDidMount() {
    this.setState({ users: Users.map(user => user.name) });
  }
}
