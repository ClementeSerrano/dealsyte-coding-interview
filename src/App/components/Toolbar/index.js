import React, { Component } from "react";
import { Header, Nav, Items, Text, Spacer } from "./styles";

export default class extends Component {
  render() {
    const { links, userLoggedIn } = this.props;

    if (userLoggedIn === undefined) {
      return (
        <Header>
          <Nav>
            <Spacer />
            <Items>
              <ul>
                {links.map(link => (
                  <li key={link.key}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </Items>
          </Nav>
        </Header>
      );
    } else {
      return (
        <Header>
          <Nav>
            <Text>{this.props.userLoggedIn}</Text>
            <Spacer />
            <Items>
              <ul>
                {links.map(link => (
                  <li key={link.key}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </Items>
          </Nav>
        </Header>
      );
    }
  }
}
