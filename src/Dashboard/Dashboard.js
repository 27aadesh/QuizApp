import React, { Component } from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import MyProfile from "../MyProfile/MyProfile";
import MyCourses from "../MyCourses/MyCourses";

import HandsOn from "../HandsOn/HandsOn";
import Home from "../Home/Home";

import Auth from "../Auth/Auth";
import { render } from "react-dom";
import NotFound from "../NotFound/NotFound";
import ExploreCategories from "../Explore/ExploreCategories";
import CategoryPage from "../Explore/CategoryPage";
import QuizDetailPage from "../QuizDetailPage/QuizDetailPage";
import QuizPage from "./../QuizPage/QuizPage";
import ResultPage from "./../ResultPage/ResultPage";

function Dashboard(props) {
  let match = useRouteMatch();

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
          <Icon name="chess queen" color="blue" />
        </Menu.Item>
        <Link to="/">
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link to="/myquizes">
          <Menu.Item as="a">
            <Icon name="book" />
            My Quizes
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
      <Sidebar.Pusher>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/myquizes">
            <MyCourses />
          </Route>
          <Route path="/explore">
            <ExploreCategories />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>

          <Route
            path="/category/:categoryId"
            render={(props) => <CategoryPage {...props.match.params} />}
          ></Route>
          <Route path="/handson">
            <HandsOn />
          </Route>
          <Route
            path="/quizdetails/:categoryId/:quizId"
            render={(props) => <QuizDetailPage {...props.match.params} />}
          />
          <Route
            path="/quiz/:categoryId/:quizId"
            render={(props) => <QuizPage {...props.match.params} />}
          />
          <Route
            path="/result/:resultId"
            render={(props) => <ResultPage {...props.match.params} />}
          />
          <Route path="/notfound" exact={true} component={NotFound} />
          <Redirect from="*" to="/notfound" />
        </Switch>
      </Sidebar.Pusher>
    </Router>
  );
}

export default Dashboard;
