import React from "react";

import { Component } from "react";
import {
  Segment,
  Icon,
  Statistic,
  Button,
  Message,
  Placeholder,
  Divider,
  Container,
  Header,
  Grid,
  List,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import fire from "./../Config/fire";
class QuizDetailPage extends Component {
  constructor(props) {
    super(props);
    this.getQuizDetails = this.getQuizDetails.bind(this);
    this.checkIsEnrolled = this.checkIsEnrolled.bind(this);
    this.onEnroll = this.onEnroll.bind(this);

    this.state = { visible: false, hidden: true, enrolled: false, quiz: null };
  }

  getQuizDetails() {
    let quiz = {};

    fire
      .firestore()
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .collection("quizzes")
      .doc(this.props.quizId)
      .get()
      .then((doc) => {
        console.log(doc.data());
        if (typeof doc.data() != "undefined") {
          quiz = {
            id: doc.id,
            quizName: doc.data().quizName,
            quizMiles: doc.data().quizMiles,
            quizDescription: doc.data().quizDescription,
            quizCredits: doc.data().quizCredits,
          };
        } else {
          quiz = undefined;
        }

        this.setState({ quiz });
      });
  }

  onTakeQuiz() {
    console.log("onTakeQuiz");
  }
  checkIsEnrolled() {
    let user = fire.auth().currentUser;

    fire
      .firestore()
      .collection("userData")
      .doc(user.uid)
      .collection("enrolledQuizzes")
      .doc(this.props.quizId)
      .onSnapshot((doc) => {
        if (typeof doc.data() !== "undefined") {
          this.setState({
            enrolled: true,
          });
        } else {
          this.setState({
            enrolled: false,
          });
        }
      });
  }
  componentDidMount() {
    this.getQuizDetails();
    this.checkIsEnrolled();
  }

  onEnroll() {
    let user = fire.auth().currentUser;
    fire
      .firestore()
      .collection("userData")
      .doc(user.uid)
      .collection("enrolledQuizzes")
      .doc(this.state.quiz.id)
      .set({
        quizName: this.state.quiz.quizName,
        quizMiles: this.state.quiz.quizMiles,
        quizCredits: this.state.quiz.quizCredits,
        quizStatus: "inprogress",
      })
      .then((doc) => {
        this.setState({ visible: true, hidden: false });
        setTimeout(() => {
          this.setState({ visible: false, hidden: true });
        }, 2000);
      })
      .catch((e) => {
        console.log("error in writing" + e);
      });
  }
  render() {
    if (typeof this.state.quiz === "undefined") {
      return (
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <h1>Quiz Not Found!</h1>
            <Link to="/">
              <Button positive> Go to Home </Button>
            </Link>
          </Grid.Column>
        </Grid>
      );
    } else {
      return this.state.quiz ? (
        <Segment basic className="ui container marginLeft">
          <Segment>
            <Header as="h2">
              {this.state.quiz.quizName}

              {this.state.enrolled ? (
                <Header.Subheader>
                  You are enrolled in this quiz.
                </Header.Subheader>
              ) : (
                <Header.Subheader>
                  You are not enrolled in this quiz.
                </Header.Subheader>
              )}
            </Header>
            <Divider />
            <Statistic size="mini">
              <Statistic.Value>
                <Icon name="road" /> {this.state.quiz.quizMiles} Miles
              </Statistic.Value>
            </Statistic>

            <Statistic size="mini">
              <Statistic.Value>
                <Icon name="star" />
                {this.state.quiz.quizCredits} Credits
              </Statistic.Value>
            </Statistic>
          </Segment>
          <Segment>
            <h3>Description:</h3>
            <Divider />
            <p>{this.state.quiz.quizDescription}</p>
          </Segment>
          <Segment attached>
            <h3>Terms and Conditions</h3>
            <Divider />
            <p>1. Entry into the Quiz is free.</p>
            <p>
              2. To be eligible to receive the first prize, entrants must
              achieve 85% in the Quiz.
            </p>
            <p>
              3. Your T-Score will be updated on successfull completion of this
              quiz.
            </p>
          </Segment>

          {this.state.enrolled ? (
            <Link to={`/quiz/${this.props.categoryId}/${this.state.quiz.id}`}>
              <Button size="big" positive attached="bottom">
                {" "}
                Take Quiz
              </Button>
            </Link>
          ) : (
            <Button
              onClick={this.onEnroll}
              size="big"
              color="blue"
              attached="bottom"
            >
              Enroll Now!
            </Button>
          )}

          <Message
            attached
            positive
            hidden={this.state.hidden}
            visible={this.state.visible}
            header="Enrolled Successfully"
          />
        </Segment>
      ) : (
        <Segment basic className="ui container marginLeft">
          <Placeholder>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder>

          <Divider />
          <Container>
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
          </Container>
        </Segment>
      );
    }
  }
}

export default QuizDetailPage;
