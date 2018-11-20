import React, { Component } from "react";
import { Container, Navlink } from "./styles";

export default class Button extends Component {
  render() {
    const { onclick, to, backgroundcolor, color, hovercolor } = this.props;

    return (
      <Container
        onClick={onclick}
        backgroundcolor={backgroundcolor}
        hovercolor={hovercolor}
      >
        <Navlink to={to} color={color}>
          {this.props.text}
        </Navlink>
      </Container>
    );
  }
}
