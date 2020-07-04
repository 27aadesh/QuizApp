import React from "react";

import { Component } from "react";
import {
  Segment,
  Sidebar,
  Menu,
  Header,
  Icon,
  Grid,
  Container,
  Divider,
  Input,
  Visibility,
} from "semantic-ui-react";
import Coursecard from "./CourseCard";

class AvailableCourses extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Menu secondary>
          <Menu.Item>
            <Header as="h1">Explore Courses</Header>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Divider />
        <Container>
          <Grid columns="2" stackable>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
            <Grid.Column>
              <Coursecard />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default AvailableCourses;
