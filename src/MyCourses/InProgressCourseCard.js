import React from "react";

import { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class InProgressCoursecard extends Component {
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Docker</Card.Header>
          <Card.Meta>
            <span className="date">100 credits</span>
          </Card.Meta>
          <Card.Description>
            Docker is containerization Platform
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic disabled attached="left" color="orange">
            In Progress
          </Button>

          <Link to="/course/id">
            <Button attached="right" positive >
              Resume Course
            </Button>
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default InProgressCoursecard;
