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
    users: null,
    userLoggedIn: ""
  };

  handleUserOnChange = e => {
    e.preventDefault();
    this.setState({ userLoggedIn: e.target.value });
  };

  handleUserSignInClick = e => {
    e.preventDefault();
    this.props.onclick(this.state.userLoggedIn);
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
            <Select
              value={this.state.userLoggedIn}
              onChange={this.handleUserOnChange}
            >
              <option value={""}>Select a user</option>
              {users.map(user => (
                <option key={Math.random()} value={user}>
                  {user}
                </option>
              ))}
            </Select>
            <ButtonContainer>
              <Button
                text="Sign in"
                onclick={this.handleUserSignInClick}
                to="/questions"
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

  componentWillUnmount() {
    console.log("will unmount sign in");
  }
}
