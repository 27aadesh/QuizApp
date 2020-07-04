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
} from "semantic-ui-react";
import QuizAnswercard from "./QuizAnswerCard";

class QuizPage extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Segment attached raised>
          <h1>Docker Quiz</h1>
          <Pagination
            boundaryRange={20}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={20}
          />
          <br />
          <br />
          <br />
          <h2>
            Docker containers and images are included in Plesk Backup and
            migrated by Plesk Migrator?
          </h2>
          <br />
          <br />
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <QuizAnswercard />
              </Grid.Column>
              <Grid.Column>
                <QuizAnswercard />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <QuizAnswercard />
              </Grid.Column>
              <Grid.Column>
                <QuizAnswercard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br />
          <br />
          <br />
          <br />
        </Segment>
        <Button.Group attached="bottom">
          <Button attached positive>
            Submit Quiz
          </Button>
          <Button attached>Next Question</Button>
        </Button.Group>
      </Segment>
    );
  }
}

export default QuizPage;
