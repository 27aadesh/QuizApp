import React, { Component } from "react";

import { Sidebar, Menu, Icon } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Auth from "./Auth/Auth";
import { render } from "react-dom";
import Dashboard from "./Dashboard/Dashboard";

import fire from "./Config/fire";
import ResultPage from "./ResultPage/ResultPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    console.log(window.location.pathname);
    this.authListener();
    //this.setState({ user: "test" });
  }
  render() {
    const regex = /\/result\/[\w]+.*$/;
    return (
      <Router>
        {regex.test(window.location.pathname) ? (
          <ResultPage />
        ) : this.state.user ? (
          <Dashboard />
        ) : (
          <Auth />
        )}
      </Router>
    );
  }
}

export default App;
