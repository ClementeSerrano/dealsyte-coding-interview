import React, { Component } from "react";
import { Header, Nav, Items, Spacer } from "./styles";

export default class extends Component {
  render() {
    const { links, users } = this.props;

    if (users === undefined) {
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
            <select>
              {users.map(user => (
                <option key={Math.random()} value={user}>
                  {user}
                </option>
              ))}
            </select>
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
