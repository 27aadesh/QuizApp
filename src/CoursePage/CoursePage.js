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
} from "semantic-ui-react";
import { Link } from "react-router-dom";
class CoursePage extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Segment>
          <h1>Docker - Basics</h1>
          <h1>{this.props.courseid}</h1>
          <Statistic size="mini">
            <Statistic.Value>150 Miles</Statistic.Value>
          </Statistic>

          <Statistic size="mini">
            <Statistic.Value>
              <Icon name="star" />
              0.5 Credits
            </Statistic.Value>
          </Statistic>
        </Segment>
        <Segment attached>
          <h3>Description</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Segment>
        <Link to={`/quiz/${this.props.courseid}/4454`}>
          <Button size="big" positive attached="bottom">
            Take Quiz
          </Button>
        </Link>
      </Segment>
    );
  }
}

export default CoursePage;
