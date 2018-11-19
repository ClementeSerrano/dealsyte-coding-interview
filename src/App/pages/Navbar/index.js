import React, { Component } from "react";
import { Toolbar } from "../../components";

import { Users } from "../../../Resources";

export default class extends Component {
  state = {
    users: null
  };

  render() {
    if (this.state.users === null) {
      return (
        <Toolbar
          links={[
            {
              name: "Questions",
              href: "/",
              key: "1"
            },
            {
              name: "User",
              href: "/",
              key: "2"
            }
          ]}
        />
      );
    } else {
      return (
        <Toolbar
          links={[
            {
              name: "Questions",
              href: "/",
              key: "1"
            },
            {
              name: "Log out",
              href: "/",
              key: "2"
            }
          ]}
          users={this.state.users}
        />
      );
    }
  }
  componentDidMount() {
    this.setState({ users: Users.map(user => user.name) });
  }
}
