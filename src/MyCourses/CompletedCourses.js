import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Grid,
  Container,
  Divider,
  Tab
} from "semantic-ui-react";
import CompletedCoursecard from "./CompletedCourseCard";

class CompletedCourses extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <Grid columns="2" stackable>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
          <Grid.Column>
            <CompletedCoursecard />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default CompletedCourses;
