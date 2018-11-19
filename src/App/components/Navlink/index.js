import React, { Component } from "react";
import { Container } from "./styles";

export default class extends Component {
  render() {
    const { to, backgroundcolor, color, hovercolor, text } = this.props;

    return (
      <Container
        to={to}
        backgroundcolor={backgroundcolor}
        color={color}
        hovercolor={hovercolor}
      >
        {text}
      </Container>
    );
  }
}
