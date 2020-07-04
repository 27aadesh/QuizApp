import React from "react";

import { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class CompletedCoursecard extends Component {
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
          <Button color="orange">Revisit Course</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default CompletedCoursecard;
