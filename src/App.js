import React, { Component } from "react";

import { Sidebar, Menu, Icon } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AvailableCourses from "./Explore/AvailableCourses";
import MyProfile from "./MyProfile/MyProfile";
import MyCourses from "./MyCourses/MyCourses";
import CoursePage from "./CoursePage/CoursePage";
import QuizPage from "./QuizPage/QuizPage";
import HandsOn from "./HandsOn/HandsOn";
import Home from "./Home/Home";

import Auth from "./Auth/Auth";
import { render } from "react-dom";
import Dashboard from "./Dashboard/Dashboard";

import fire from "./Config/fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
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
    return <Router>{this.state.user ? <Dashboard /> : <Auth />}</Router>;
  }
}

export default App;
