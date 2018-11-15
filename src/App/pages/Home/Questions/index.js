import React, { Component } from "react";
import { Container } from "./styles";

import Card from "../../../components/Card";

export default class Questions extends Component {
  render() {
    return (
      <Container>
        <Card
          author="Clemente Serrano"
          date="14 Dec."
          time="13:19"
          messaje="Hola! Cómo están"
        />
        <Card
          author="Antonia Biggs"
          date="13 Oct."
          time="10:39"
          messaje="Chao! Cómo están"
        />
        <Card author="Maria Biggs" date="28 Nov." time="12:02" />
        <Card author="Andres Biggs" date="7 Mar." time="17:11" />
        <Card author="Veronica Biggs" date="03 Jul." time="16:20" />
      </Container>
    );
  }
}
