import React from "react";

import { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import styles from "../styles.css";
class QuizAnswercard extends Component {
  render() {
    return (
      <Card fluid color="red">
        <Card.Content>
          <Card.Description>
            Docker is containerization Platform
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default QuizAnswercard;
