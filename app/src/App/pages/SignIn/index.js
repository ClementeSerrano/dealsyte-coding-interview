import React, { Component } from "react";
import {
  Container,
  Modal,
  Select,
  ButtonContainer,
  LoadingContainer
} from "./styles";
import { Button, Loading } from "../../components";
import { Users } from "../../../Resources";

export default class extends Component {
  state = {
    users: null
  };

  handleSingIn = e => {
    e.preventDefault();
  };

  render() {
    const { users } = this.state;

    if (users === null) {
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    } else {
      return (
        <Container>
          <Modal>
            <h1>Welcome!</h1>
            <p>Please select your user</p>
            <Select>
              {users.map(user => (
                <option key={Math.random()} value={user}>
                  {user}
                </option>
              ))}
            </Select>
            <ButtonContainer>
              <Button
                text="Sign in"
                onclick={this.props.onclick}
                color="#fff"
                backgroundcolor="#0099ff"
                hovercolor="#006bb3"
              />
            </ButtonContainer>
          </Modal>
        </Container>
      );
    }
  }

  componentDidMount() {
    this.setState({ users: Users.map(user => user.name) });
  }
}
