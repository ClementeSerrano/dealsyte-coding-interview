import React, { Component } from "react";
import moment from "moment";
import { Container, QuestionsContainer } from "./styles";
import { SearchByIdAndOrg, SearchByName } from "../../components/Searcher";
import { Card, Navlink } from "../../components";
import { Questions } from "../../../Resources";

export default class extends Component {
  state = {
    userLoggedIn: null
  };

  formatDate = date => {
    return moment(date).format("MMMM Do, h:mm A");
  };

  render() {
    const { userLoggedIn } = this.state;

    if (userLoggedIn === null) {
      return (
        <Container>
          <QuestionsContainer>
            <h1>Oops!</h1>
            <p>
              Seems like you are not logged in. Please click 'Home' and log in
              :)
            </p>
          </QuestionsContainer>
        </Container>
      );
    } else {
      return (
        <Container>
          <QuestionsContainer>
            {Questions.map(question => {
              const author = SearchByIdAndOrg(question.creatorId, userLoggedIn);
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
  }

  componentDidMount() {
    this.setState({ userLoggedIn: SearchByName(this.props.userLoggedIn) });
  }
}
