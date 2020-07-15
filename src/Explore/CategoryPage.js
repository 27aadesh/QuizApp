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
  Button,
} from "semantic-ui-react";

import CategoryCard from "./CategoryCard";

import fire from "./../Config/fire";
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.getQuizzes = this.getQuizzes.bind(this);
    this.state = {
      categoryDetails: null,
      quizzes: null,
    };
  }

  getQuizzes() {
    let categoryDetails = {};
    let quizzes = [];
    fire
      .firestore()
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .get()
      .then((doc) => {
        if (typeof doc.data() != "undefined") {
          categoryDetails = {
            id: doc.id,
            categoryName: doc.data().categoryName,
            categoryDescription: doc.data().categoryDescription,
          };
        } else {
          categoryDetails = undefined;
        }
        this.setState({ categoryDetails });
      });

    fire
      .firestore()
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .collection("quizzes")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          quizzes.push({
            id: doc.id,
            quizName: doc.data().quizName,
            quizMiles: doc.data().quizMiles,
            quizCredits: doc.data().quizCredits,
          });
        });

        this.setState({ quizzes });
      });
  }

  componentDidMount() {
    this.getQuizzes();
  }

  render() {
    if (typeof this.state.categoryDetails == "undefined") {
      return (
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <h1>I think you are Lost but we got you covered!</h1>
            <Link to="/">
              <Button positive> Go to Home </Button>
            </Link>
          </Grid.Column>
        </Grid>
      );
    } else {
      return this.state.categoryDetails === null ||
        this.state.quizzes == null ? (
        <Segment basic className="ui container marginLeft">
          <Placeholder>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
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
      ) : typeof this.state.categoryDetails == "undefined" ? (
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <h1>Category Not Found!</h1>
            <Link to="/">
              <Button positive> Go to Home </Button>
            </Link>
          </Grid.Column>
        </Grid>
      ) : (
        <Segment basic className="ui container marginLeft">
          <Segment>
            <Header size="huge">
              {this.state.categoryDetails.categoryName}
            </Header>

            <p>{this.state.categoryDetails.categoryDescription}</p>
          </Segment>

          <Divider />
          <Container>
            <Grid columns="2" stackable>
              {this.state.quizzes.map((doc) => {
                return (
                  <Grid.Column>
                    <Link to={`/quizdetails/${this.props.categoryId}/${doc.id}`}>
                      <QuizCard
                        quizName={doc.quizName}
                        quizMiles={doc.quizMiles}
                        quizCredits={doc.quizCredits}
                      />
                    </Link>
                  </Grid.Column>
                );
              })}
            </Grid>
          </Container>
        </Segment>
      );
    }
  }
}

export default CategoryPage;
