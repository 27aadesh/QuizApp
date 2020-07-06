import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Card,
  Icon,
  Image,
  Statistic,
  Grid,
  Button,
  Pagination,
  Progress,
} from "semantic-ui-react";
import QuizAnswercard from "./QuizAnswerCard";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handleThirdButton = this.handleThirdButton.bind(this);
    this.handleFourthButton = this.handleFourthButton.bind(this);
    this.state = {
      firstButton: false,
      secondButton: false,
      thirdButton: false,
      fourthButton: false,
      selectedAnswer: null,
    };
  }

  handleFirstButton() {
    this.setState({
      firstButton: true,
      secondButton: false,
      thirdButton: false,
      fourthButton: false,
      selectedAnswer: "a",
    });
  }

  handleSecondButton() {
    this.setState({
      firstButton: false,
      secondButton: true,
      thirdButton: false,
      fourthButton: false,
      selectedAnswer: "b",
    });
  }

  handleThirdButton() {
    this.setState({
      firstButton: false,
      secondButton: false,
      thirdButton: true,
      fourthButton: false,
      selectedAnswer: "c",
    });
  }

  handleFourthButton() {
    this.setState({
      firstButton: false,
      secondButton: false,
      thirdButton: false,
      fourthButton: true,
      selectedAnswer: "d",
    });
  }

  render() {
    return (
      <>
        <h2>
          Docker containers and images are included in Plesk Backup and migrated
          by Plesk Migrator?
        </h2>

        <br />
        <Grid columns={2}>
          <Grid.Column>
            <Button
              toggle
              active={this.state.firstButton}
              onClick={this.handleFirstButton}
              fluid
              size="large"
              content="Docker is containerization Platform"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              toggle
              active={this.state.secondButton}
              onClick={this.handleSecondButton}
              fluid
              size="large"
              content="Docker is containerization Platform"
            />
          </Grid.Column>

          <Grid.Column>
            <Button
              toggle
              active={this.state.thirdButton}
              onClick={this.handleThirdButton}
              fluid
              size="large"
              content="Docker is containerization Platform"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              toggle
              active={this.state.fourthButton}
              onClick={this.handleFourthButton}
              fluid
              size="large"
              content="Docker is containerization Platform"
            />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Answers;
