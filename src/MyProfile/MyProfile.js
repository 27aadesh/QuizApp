import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Menu,
  Button,
  Input,
} from "semantic-ui-react";
import styles from "../styles.css";
import fire from "../Config/fire";
import { Link } from "react-router-dom";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Header as="h1">My Profile</Header>
        <Divider />

        <Link to="/">
          <Button onClick={this.logout} negative>
            Logout
          </Button>
        </Link>
      </Segment>
    );
  }
}

export default MyProfile;
