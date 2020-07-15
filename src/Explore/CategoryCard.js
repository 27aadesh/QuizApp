import React from "react";

import { Component } from "react";
import {
  Card,
  Button,
  Image,
  Reveal,
  Label,
  Segment,
  Grid,
} from "semantic-ui-react";
import styles from "../styles.css";
function CategoryCard(props) {
  return (
    <Card fluid raised link>
      <Card.Content
        style={{
          height: 150,
          opacity: 0.8,
          backgroundImage: `url(${props.categoryUrl})`,
          backgroundSize: "cover",

          fontWeight: "normal",
          marginBottom: 0,
        }}
      >
        <Card.Header
          textAlign="center"
          style={{
            color: "white",
            marginTop: 50,
          }}
        >
          {props.categoryName}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export default CategoryCard;
