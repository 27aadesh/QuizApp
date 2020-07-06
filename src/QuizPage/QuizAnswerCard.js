import React from "react";

import { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import styles from "../styles.css";
class QuizAnswercard extends Component {
  state = {};
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }));
  render() {
    const { active } = this.state;
    return (
      <Button
        toggle
        active={active}
        onClick={this.handleClick}
        fluid
        size="large"
      >
        <p>Docker is containerization Platform</p>
      </Button>
    );
  }
}

export default QuizAnswercard;
