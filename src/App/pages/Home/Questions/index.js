import React, { Component } from "react";
import { Container } from "./styles";
import Card from "../../../components/Card";

import { Users } from "../../../../Resources/index";

export default class Questions extends Component {
  render() {
    return (
      <Container>
        {Users.map(user => (
          <Card
            author={user.name}
            date="3 Oct."
            time="12:45"
            message={user.organization}
          />
        ))}
      </Container>
    );
  }
}
