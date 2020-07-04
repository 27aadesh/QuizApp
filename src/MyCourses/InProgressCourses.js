import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Grid,
  Container,
  Divider,
  Tab,
} from "semantic-ui-react";
import InProgressCoursecard from "./InProgressCourseCard";

class InProgressCourses extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <Grid columns="2" stackable>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
          <Grid.Column>
            <InProgressCoursecard />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default InProgressCourses;
