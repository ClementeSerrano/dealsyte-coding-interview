import React, { Component } from "react";
import { Container, Discussion } from "./styles";
import { QuestionCard } from "../../components/Card";

export default class DiscussionPage extends Component {
  render() {
    return (
      <Container>
        <Discussion>
          <QuestionCard
            author="Pico"
            date="3 Oct."
            time="12:45"
            message="Pico"
          />
        </Discussion>
      </Container>
    );
  }
}
