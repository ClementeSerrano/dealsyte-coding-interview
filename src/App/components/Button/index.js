import React, { Component } from "react";
import { Container } from "./styles";

export default class Button extends Component {
  render() {
    return (
      <Container
        onClick={this.props.onclick}
        backgroundcolor={this.props.backgroundcolor}
        color={this.props.color}
        hovercolor={this.props.hovercolor}
      >
        {this.props.text}
      </Container>
    );
  }
}
