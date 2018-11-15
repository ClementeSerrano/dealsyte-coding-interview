import React, { Component } from "react";
import { Container } from "./styles";
import Questions from "./Questions";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Questions />
      </Container>
    );
  }
}
