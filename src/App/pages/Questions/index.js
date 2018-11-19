import React, { Component } from "react";
import moment from "moment";
import { Container, QuestionsContainer } from "./styles";
import Searcher from "../../components/Searcher";
import { Card, Navlink } from "../../components";
import { Questions } from "../../../Resources";

export default class extends Component {
  state = {
    questions: []
  };

  formatDate = date => {
    return moment(date).format("MMMM Do, h:mm A");
  };

  render() {
    return (
      <Container>
        <QuestionsContainer>
          {Questions.map(question => {
            const author = Searcher(question.creatorId);
            const date = this.formatDate(question.createdAt);
            const lastEditionDate = this.formatDate(question.lastEditedAt);

            return (
              <Card
                key={question.id}
                author={author}
                date={date}
                lastEditionDate={lastEditionDate}
                message={question.questionText}
                button={
                  <Navlink
                    to={`/discussions/${question.id}/${author}/${
                      question.createdAt
                    }/${question.questionText}`}
                    text="See discussion"
                    color="#fff"
                    backgroundcolor="#0099ff"
                    hovercolor="#006bb3"
                  />
                }
              />
            );
          })}
        </QuestionsContainer>
      </Container>
    );
  }

  componentDidMount() {
    // Asuming that Questions will be imported from an API call...
  }
}
