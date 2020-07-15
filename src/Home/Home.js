import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Menu,
  Input,
} from "semantic-ui-react";
import styles from "../styles.css";
import ImageCarousel from "../CarouselProvider/ImageCarousel";
import ExploreCategories from "../Explore/ExploreCategories";

class Home extends Component {
  render() {
    return (
      <Segment basic className="ui container marginLeft">
        <Header as="h1">Home</Header>
        <Divider />

        <ImageCarousel />
        
      </Segment>
    );
  }
}

export default Home;
