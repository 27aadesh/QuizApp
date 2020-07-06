import React from "react";

import { Component } from "react";
import { Segment, Divider, Button, Progress } from "semantic-ui-react";
import QuizAnswercard from "./QuizAnswerCard";
import Answers from "./Answers";
const questions = [
  {
    questionId: 1,
    question:
      "Docker containers and images are included in Plesk Backup and migrated by Plesk Migrator?",
    options: ["Docker", "Kube", "Hello", "World"],
  },

  {
    questionId: 2,
    question: "included in Plesk Backup and migrated by Plesk Migrator?",
    options: ["Docker1", "Kube1", "Hello1", "World1"],
  },
];
class QuizPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      answeredQuestions: 0
    }
  }
  
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Segment attached raised>
          <h1>Docker Quiz</h1>
          <Divider />
          <br></br>

          <Progress
            color="yellow"
            active
            value="3"
            total="20"
            progress="ratio"
          />

          <Answers />
          <br />
          <br />
          <br />

          <Progress size="tiny" color="green" value="0" total="20" />
        </Segment>
        <Button.Group attached="bottom">
          <Button attached>Previous Question</Button>
          <Button attached>Next Question</Button>
        </Button.Group>
        <Segment stacked>
          <Button positive fluid>
            Submit Quiz
          </Button>
        </Segment>
      </Segment>
    );
  }
}

export default QuizPage;
