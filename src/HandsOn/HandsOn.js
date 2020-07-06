import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Menu,
  Input,
  Embed,
} from "semantic-ui-react";
import styles from "../styles.css";

class HandsOn extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Header as="h1">Hands On</Header>
        <Divider />
      </Segment>
    );
  }
}

export default HandsOn;
