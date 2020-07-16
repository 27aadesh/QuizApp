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
  Loader,
  Placeholder,
} from "semantic-ui-react";
import Coursecard from "./CategoryCard";
import CategoryCard from "./CategoryCard";

import fire from "./../Config/fire";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

class ExploreCategories extends Component {
  constructor(props) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      categories: null,
    };
  }

  getCategories() {
    let categories = [];
    fire
      .firestore()
      .collection("quizCategories")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          categories.push({
            id: doc.id,
            categoryName: doc.data().categoryName,
            categoryUrl: doc.data().categoryUrl,
          });
        });

        this.setState({ categories });
      });
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return this.state.categories ? (
      <Segment basic className="ui container marginLeft">
        <Segment raised>
          <Header as="h1">Browse Categories</Header>
          <p>
            Looking for something specific? Pick a category that interests you
          </p>
        </Segment>

        <Divider />
        <Container>
          <Grid columns="2" stackable>
            {this.state.categories.map((doc) => {
              return (
                <Grid.Column key={doc.id}>
                  <Link to={`/category/${doc.id}`}>
                    <CategoryCard
                      categoryName={doc.categoryName}
                      categoryUrl={doc.categoryUrl}
                    />
                  </Link>
                </Grid.Column>
              );
            })}
          </Grid>
        </Container>
      </Segment>
    ) : (
      <Segment basic className="ui container marginLeft">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>

        <Divider />
        <Container>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default ExploreCategories;
