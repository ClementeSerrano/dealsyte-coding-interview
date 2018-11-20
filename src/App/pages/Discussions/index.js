import React, { Component } from "react";
import moment from "moment";
import { Container, Discussion } from "./styles";
import { Card, Navlink } from "../../components";
import { SearchById } from "../../components/Searcher";

import { Answers, Comments } from "../../../Resources";

export default class extends Component {
  formatDate = date => {
    return moment(date).format("MMMM Do, h:mm A");
  };

  render() {
    const { id, author, question } = this.props;
    const date = this.formatDate(this.props.date);
    const lastEditionDate = this.formatDate(this.props.lastEditedAt);

    return (
      <Container>
        <Discussion>
          <h1>Question #{id}</h1>
          <Card
            author={author}
            date={date}
            message={question}
            lastEditionDate={lastEditionDate}
            button={
              <Navlink
                to="/questions"
                text="Back to questions"
                color="#fff"
                backgroundcolor="#0099ff"
                hovercolor="#006bb3"
              />
            }
          />
          <h3>Comments</h3>

          {Comments.map(comment => {
            if (comment.questionId === parseInt(id)) {
              const commentAuthor = SearchById(comment.creatorId);
              const commentDate = this.formatDate(comment.createdAt);
              const commentLastEditionDate = this.formatDate(
                comment.lastEditedAt
              );

              return (
                <Card
                  key={comment.id}
                  author={commentAuthor}
                  date={commentDate}
                  message={comment.comment}
                  lastEditionDate={commentLastEditionDate}
                />
              );
            }

            return <div key={comment.id} />;
          })}
          <h3>Answers</h3>
          {Answers.map(answer => {
            if (answer.questionId === parseInt(id)) {
              const answerAuthor = SearchById(answer.creatorId);
              const answerDate = this.formatDate(answer.createdAt);
              const answerLastEditionDate = this.formatDate(
                answer.lastEditedAt
              );

              return (
                <Card
                  key={answer.id}
                  author={answerAuthor}
                  date={answerDate}
                  message={answer.answerText}
                  lastEditionDate={answerLastEditionDate}
                />
              );
            }

            return <div key={answer.id} />;
          })}
        </Discussion>
      </Container>
    );
  }
}
