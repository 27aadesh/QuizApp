import React from "react";

import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AvailableCourses from "./Explore/AvailableCourses";
import MyProfile from "./MyProfile/MyProfile";
import MyCourses from "./MyCourses/MyCourses";
import CoursePage from "./CoursePage/CoursePage";
import QuizPage from "./QuizPage/QuizPage";
import HandsOn from "./HandsOn/HandsOn";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Sidebar
        as={Menu}
        icon="labeled"
        animation="overlay"
        vertical
        visible
        width="thin"
      >
        <Menu.Item>
          <Icon name="chess queen" color="red" />
        </Menu.Item>
        <Link to="/">
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link to="/mycourses">
          <Menu.Item as="a">
            <Icon name="book" />
            My Courses
          </Menu.Item>
        </Link>
        <Link to="/explore">
          <Menu.Item as="a">
            <Icon name="globe" color="blue" />
            Explore
          </Menu.Item>
        </Link>
        <Link to="/handson">
          <Menu.Item as="a">
            <Icon name="hand spock" />
            Hands On
          </Menu.Item>
        </Link>
        <Link to="/myprofile">
          <Menu.Item as="a">
            <Icon name="spy" />
            My Profile
          </Menu.Item>
        </Link>
      </Sidebar>

      <Switch>
        <Route exact path="/">
          <Sidebar.Pusher>
            <Home />
          </Sidebar.Pusher>
        </Route>
        <Route path="/mycourses">
          <Sidebar.Pusher>
            <MyCourses />
          </Sidebar.Pusher>
        </Route>
        <Route path="/explore">
          <Sidebar.Pusher>
            <AvailableCourses />
          </Sidebar.Pusher>
        </Route>
        <Route path="/myprofile">
          <Sidebar.Pusher>
            <MyProfile />
          </Sidebar.Pusher>
        </Route>
        <Route path="/course/id">
          <Sidebar.Pusher>
            <CoursePage />
          </Sidebar.Pusher>
        </Route>
        <Route path="/handson">
          <Sidebar.Pusher>
            <HandsOn />
          </Sidebar.Pusher>
        </Route>
        <Route path="/quiz/quizid">
          <Sidebar.Pusher>
            <QuizPage />
          </Sidebar.Pusher>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
