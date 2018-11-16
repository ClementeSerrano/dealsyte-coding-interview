import React, { Component } from "react";
import { Container, QuestionsContainer } from "./styles";
import Searcher from "../../components/Searcher";

import { QuestionCard } from "../../components/Card";

import { Questions } from "../../../Resources/index";

export default class QuestionsPage extends Component {
  render() {
    return (
      <Container>
        <QuestionsContainer>
          {Questions.map(question => {
            return (
              <QuestionCard
                key={question.id}
                author={Searcher(question.creatorId)}
                date="3 Oct."
                time="12:45"
                message={question.questionText}
              />
            );
          })}
        </QuestionsContainer>
      </Container>
    );
  }
}
