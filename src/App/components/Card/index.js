import React, { Component } from "react";
import { Container, Text, Title, Subtitle, Content } from "./styles";

export default class Card extends Component {
  render() {
    return (
      <Container>
        <Text>
          <Title>{this.props.author}</Title>
          <Subtitle>
            {this.props.date}, {this.props.time}
          </Subtitle>
        </Text>
        <Text>
          <Content>{this.props.message}</Content>
        </Text>
      </Container>
    );
  }
}
