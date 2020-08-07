import React from "react";

import { Component } from "react";
import {
  Segment,
  Divider,
  Button,
  Progress,
  Header,
  Grid,
  Container,
  Loader,
} from "semantic-ui-react";

import fire from "../Config/fire";
import { Link } from "react-router-dom";

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handleThirdButton = this.handleThirdButton.bind(this);
    this.handleFourthButton = this.handleFourthButton.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
    //this.updateSelectedTick = this.updateSelectedTick.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
    this.state = {
      currentQuestion: 0,
      answeredQuestions: 0,
      quizNotFound: false,
      questions: null,
      enrolled: true,
      answersSelected: {},
      quizName: "",
      quizCredits: 0
    };
  }

  nextQuestion() {
    let c = this.state.currentQuestion;
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({
        currentQuestion: c + 1,
      });
    }
  }
  submitQuiz() {
    var email = fire.auth().currentUser.email;
    console.log(this.state.answersSelected);
    let score = 0;
    let status = "failed";
    this.state.questions.forEach((q) => {
      if (this.state.answersSelected[q.questionId] === q.answer) {
        score = score + 1;
      }
    });
    if (score > 0.7 * this.state.questions.length) {
      status = "passed";
    } else {
      status = "failed";
    }
    fire
      .firestore()
      .collection("results")
      .add({
        score: score,
        status: status,
        quizName: this.state.quizName,
        quizCredits: this.state.quizCredits,
        totalQuestions: this.state.questions.length,
        displayEmail: email
      })
      .then((doc) => {
        window.location.pathname = `/result/${doc.id}`;
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(score);
  }
  previousQuestion() {
    let c = this.state.currentQuestion;
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: c - 1,
      });
    }
  }

  componentDidMount() {
    let questions = [];

    fire
      .firestore()
      .collection("userData")
      .doc(fire.auth().currentUser.uid)
      .collection("enrolledQuizzes")
      .doc(this.props.quizId)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          this.setState({
            enrolled: false,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    fire
      .firestore()
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .collection("quizzes")
      .doc(this.props.quizId)
      .get()
      .then((doc) => {
        this.setState({
          quizName: doc.data().quizName,
          quizCredits: doc.data().quizCredits,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    fire
      .firestore()
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .collection("quizzes")
      .doc(this.props.quizId)
      .collection("questions")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          this.setState({
            quizNotFound: true,
          });
        } else {
          querySnapshot.forEach((doc) => {
            questions.push({
              questionId: doc.id,
              question: doc.data().question,
              A: doc.data().A,
              B: doc.data().B,
              C: doc.data().C,
              D: doc.data().D,
              answer: doc.data().answer,
            });

            this.setState({ questions });
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  handleFirstButton() {
    let questionId = this.state.questions[this.state.currentQuestion]
      .questionId;
    let ans = "A";
    this.saveAnswer(questionId, ans);
  }
  handleSecondButton() {
    let questionId = this.state.questions[this.state.currentQuestion]
      .questionId;
    let ans = "B";
    this.saveAnswer(questionId, ans);
  }
  handleThirdButton() {
    let questionId = this.state.questions[this.state.currentQuestion]
      .questionId;
    let ans = "C";
    this.saveAnswer(questionId, ans);
  }
  handleFourthButton() {
    let questionId = this.state.questions[this.state.currentQuestion]
      .questionId;
    let ans = "D";
    this.saveAnswer(questionId, ans);
  }
  saveAnswer(questionId, optionSelected) {
    let answersSelected = this.state.answersSelected;
    answersSelected[questionId] = optionSelected;

    this.setState({
      answersSelected,
    });
  }
  render() {
    return this.state.enrolled ? (
      this.state.questions ? (
        <Segment basic className="ui container marginLeft">
          <Segment attached raised>
            <h1>You are Monitored by a Bot.</h1>
            <Divider />
            <br></br>

            <Progress
              color="yellow"
              active
              value={this.state.currentQuestion + 1}
              total={this.state.questions.length}
              progress="ratio"
            />

            <h2>{this.state.questions[this.state.currentQuestion].question}</h2>

            <br />
            <Grid columns={2}>
              <Grid.Column>
                <Segment
                  style={{ padding: 20 }}
                  raised
                  color="red"
                  inverted={
                    this.state.answersSelected[
                      this.state.questions[this.state.currentQuestion]
                        .questionId
                    ] == "A"
                      ? true
                      : false
                  }
                  onClick={this.handleFirstButton}
                >
                  <Header as="h4">
                    {this.state.questions[this.state.currentQuestion].A}
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ padding: 20 }}
                  raised
                  color="red"
                  inverted={
                    this.state.answersSelected[
                      this.state.questions[this.state.currentQuestion]
                        .questionId
                    ] == "B"
                      ? true
                      : false
                  }
                  onClick={this.handleSecondButton}
                >
                  <Header as="h4">
                    {this.state.questions[this.state.currentQuestion].B}
                  </Header>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment
                  style={{ padding: 20 }}
                  raised
                  color="red"
                  inverted={
                    this.state.answersSelected[
                      this.state.questions[this.state.currentQuestion]
                        .questionId
                    ] == "C"
                      ? true
                      : false
                  }
                  onClick={this.handleThirdButton}
                >
                  <Header as="h4">
                    {this.state.questions[this.state.currentQuestion].C}
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  style={{ padding: 20 }}
                  raised
                  color="red"
                  inverted={
                    this.state.answersSelected[
                      this.state.questions[this.state.currentQuestion]
                        .questionId
                    ] == "D"
                      ? true
                      : false
                  }
                  onClick={this.handleFourthButton}
                >
                  <Header as="h4">
                    {this.state.questions[this.state.currentQuestion].D}
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid>
            <br />
            <br />
            <br />
          </Segment>
          <Button.Group attached="bottom">
            <Button attached onClick={this.previousQuestion}>
              Previous Question
            </Button>
            <Button attached onClick={this.nextQuestion}>
              Next Question
            </Button>
          </Button.Group>
          <Segment stacked>
            <Button positive fluid onClick={this.submitQuiz}>
              Submit Quiz
            </Button>
          </Segment>
        </Segment>
      ) : this.state.quizNotFound ? (
        <Segment basic className="ui container marginLeft">
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
        </Segment>
      ) : (
        <Segment basic className="ui container marginLeft">
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <h1>Loading Quiz...</h1>
            </Grid.Column>
          </Grid>
        </Segment>
      )
    ) : (
      <Segment basic className="ui container marginLeft">
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <h1>Please enroll before starting the Quiz</h1>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default QuizPage;
