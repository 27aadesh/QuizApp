import React from "react";

import { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <h1>Page Not Found!</h1>
          <Link to="/">
            <Button positive> Go to Home </Button>
          </Link>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NotFound;
