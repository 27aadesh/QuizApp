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
  Icon,
  Header,
  Container,
} from "semantic-ui-react";
import styles from "../styles.css";

function QuizCard(props) {
  return (
    <Card fluid raised link>
      <Card.Content
        style={{
          height: 90,
          opacity: 0.8,
          // backgroundColor: "red",
          backgroundSize: "cover",

          fontWeight: "normal",
          marginBottom: 0,
        }}
      >
        <Card.Header
          textAlign="center"
          style={{
            //  color: "white",
            marginTop: 25,
          }}
        >
          {props.quizName}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Header sub disabled floated="left">
          <Icon name="star" />
          {props.quizCredits} Credits
        </Header>

        <Header sub disabled floated="right">
          <Icon name="road" />
          {props.quizMiles} Miles
        </Header>
      </Card.Content>
    </Card>
  );
}

export default QuizCard;
