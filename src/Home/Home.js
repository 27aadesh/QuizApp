import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Menu,
  Input,
} from "semantic-ui-react";
import styles from "../styles.css";

class Home extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Header as="h1">Home</Header>
        <Divider />
      </Segment>
    );
  }
}

export default Home;
