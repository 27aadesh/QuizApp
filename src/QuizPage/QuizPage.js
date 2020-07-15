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
} from "semantic-ui-react";

import fire from "../Config/fire";

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
      questions: null,
      answersSelected: {},
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
    console.log(this.state.answersSelected);
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
      .collection("quizCategories")
      .doc(this.props.categoryId)
      .collection("quizzes")
      .doc(this.props.quizId)
      .collection("questions")
      .get()
      .then((querySnapshot) => {
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

    console.log(answersSelected[questionId]);
    this.setState({
      answersSelected,
    });
  }
  render() {
    return this.state.questions ? (
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
                    this.state.questions[this.state.currentQuestion].questionId
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
                    this.state.questions[this.state.currentQuestion].questionId
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
                    this.state.questions[this.state.currentQuestion].questionId
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
                    this.state.questions[this.state.currentQuestion].questionId
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
    ) : (
      <Segment basic className="ui container marginLeft">
        <Grid verticalAlign="middle">
          <Grid.Column>
            <Container textAlign="center">Loading Quiz...</Container>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default QuizPage;
