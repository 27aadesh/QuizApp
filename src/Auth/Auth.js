import React from "react";

import { Component } from "react";
import {
  Segment,
  Header,
  Grid,
  Icon,
  Form,
  Button,
  Message,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

import fire from "../Config/fire";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      isSignIn: true,
      loginEmailError: null,
      loginPasswordError: null,
      loginError: false
    };
  }

  toggleSignIn() {
    this.setState({
      isSignIn: !this.state.isSignIn,
    });
  }
  handleChange(e) {
    this.setState({
      loginEmailError: null,
      loginPasswordError: null,
      [e.target.name]: e.target.value,
      loginError: false
    });
  }

  login(e) {
    if (this.state.loginEmail === "") {
      this.setState({
        loginEmailError: "Please enter a Email",
      });
    }
    if (this.state.loginPassword === "") {
      this.setState({
        loginPasswordError: "Please enter a Password",
      });
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.state.loginEmail
      )
    ) {
      this.setState({
        loginEmailError: "Please enter a valid email",
      });
    }

    if (
      this.state.loginPassword !== "" &&
      this.state.loginEmail !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.state.loginEmail
      )
    ) {
      console.log(this.state.loginEmail);
      console.log(this.state.loginPassword);
      fire
        .auth()
        .signInWithEmailAndPassword(
          this.state.loginEmail,
          this.state.loginPassword
        )
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
            this.setState({
                loginError: true,
              });
        });
    }
  }
  render() {
    return (
      <Segment basic>
        {this.state.isSignIn ? (
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" textAlign="center">
                <Icon name="chess queen" color="blue" />
              </Header>
              <Header as="h1" textAlign="center">
                Quizzy - Get your T-Score
              </Header>
              <Header as="h2" textAlign="center">
                Log-in to your account
              </Header>
              <Form size="large" error={this.state.loginError}>
                <Segment stacked>
                  <Form.Input
                    error={
                      this.state.loginEmailError
                        ? { content: this.state.loginEmailError }
                        : null
                    }
                    fluid
                    icon="user"
                    name="loginEmail"
                    iconPosition="left"
                    onChange={this.handleChange}
                    value={this.props.loginEmail}
                    placeholder="E-mail address"
                  />
                  <Form.Input
                    error={
                      this.state.loginPasswordError
                        ? { content: this.state.loginPasswordError }
                        : null
                    }
                    fluid
                    onChange={this.handleChange}
                    value={this.props.loginPassword}
                    icon="lock"
                    name="loginPassword"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />

                  <Button onClick={this.login} color="blue" fluid size="large">
                    Login
                  </Button>
                </Segment>
                <Message
                error
                header="Something went wrong"
                content="Either you have entered a wrong password or Something went wrong at the server."
              />
              </Form>
              <Segment>
                New to us? <a onClick={this.toggleSignIn}>Sign Up</a>
              </Segment>
              
            </Grid.Column>
          </Grid>
        ) : (
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" textAlign="center">
                <Icon name="chess queen" color="blue" /> Register new account
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    name="email"
                    iconPosition="left"
                    onChange={this.handleChange}
                    value={this.props.email}
                    placeholder="E-mail address"
                  />
                  <Form.Input
                    fluid
                    onChange={this.handleChange}
                    value={this.props.password}
                    icon="lock"
                    name="password"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
                  <Form.Input
                    fluid
                    onChange={this.handleChange}
                    value={this.props.password}
                    icon="lock"
                    name="confirmPassword"
                    iconPosition="left"
                    placeholder="Confirm Password"
                    type="password"
                  />

                  <Button onClick={this.login} color="blue" fluid size="large">
                    Register
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already Registered?
                <Link onClick={this.toggleSignIn}>Sign In</Link>
              </Message>
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    );
  }
}

export default Auth;
