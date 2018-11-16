import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Text, Title, Subtitle, Content } from "./styles";

export default class DiscussionCard extends Component {
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
        <Text>
          <Content>
            <NavLink to="/discussions">Details</NavLink>
          </Content>
        </Text>
      </Container>
    );
  }
}
