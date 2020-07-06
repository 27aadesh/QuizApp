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

import InProgressCourses from "./InProgressCourses";
import CompletedCourses from "./CompletedCourses";

const panes = [
  {
    menuItem: "In Progress",
    render: () => <InProgressCourses />,
  },
  {
    menuItem: "Completed",
    render: () => <CompletedCourses />,
  },
];

class MyCourses extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Header as="h1">My Quizes</Header>
        <Tab className="ui left floated image" panes={panes} />
      </Segment>
    );
  }
}

export default MyCourses;
