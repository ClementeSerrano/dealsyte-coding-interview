import React, { Component } from "react";
import { Container, Text, Title, Subtitle, Spacer, Content } from "./styles";

export default class extends Component {
  render() {
    const { author, date, lastEditionDate, message, button } = this.props;

    return (
      <Container>
        <Text>
          <Title>{author}</Title>
          <Subtitle>{date}</Subtitle>
          <Spacer />
          <Title>last change:</Title>
          <Subtitle>{lastEditionDate}</Subtitle>
        </Text>
        <Text>
          <Content>{message}</Content>
        </Text>
        <Text>
          <Content>{button}</Content>
        </Text>
      </Container>
    );
  }
}
