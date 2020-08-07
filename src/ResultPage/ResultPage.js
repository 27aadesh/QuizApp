import React from "react";

import { Component } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import {
  Grid,
  Button,
  Card,
  Segment,
  Image,
  Divider,
  Icon,
  Loader,
} from "semantic-ui-react";
import styles from "../styles.css";
import fire from "./../Config/fire";

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

class ResultPage extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
    };
  }
  componentDidMount() {
    var res = window.location.pathname.split("/");
    fire
      .firestore()
      .collection("results")
      .doc(res[2])
      .get()
      .then((doc) => {
        console.log(doc.data());
        this.setState({
          result: doc.data(),
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  download() {
    window.print();
  }
  render() {
    return this.state.result == null ? (
      <Loader />
    ) : (
      <Grid
        verticalAlign="middle"
        stackable
        columns={2}
        style={{
          padding: 50,
          margin: "auto",
          //width: "50%",
        }}
      >
        <Grid.Column>
          <Card fluid color="black">
            <Image
              size="medium"
              centered
              src="https://firebasestorage.googleapis.com/v0/b/quiz-app-ed006.appspot.com/o/Award-Ribbon-Badge-Transparent-Background.jpg?alt=media&token=d7d3e436-ebc3-4ec3-add9-d983dd28a7e3"
              wrapped
            />

            <Card.Content textAlign="center" style={{ color: "black" }}>
              <h4>This Badge is awarded to</h4>
              <Divider />
              <h1 style={{ fontFamily: "Parisienne", fontSize: 40 }}>
                {this.state.result.displayEmail}
              </h1>
              <Divider />
              <p>
                On scoring {this.state.result.score} out of{" "}
                {this.state.result.totalQuestions} in{" "}
                <b>{this.state.result.quizName}</b> Quiz
              </p>
            </Card.Content>

            <Card.Content extra>
              <a>
                <Icon name="copyright" />
                Quizzy.com
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{ margin: 3 }}>
            <Button onClick={this.download}>Download Pdf</Button>
          </Grid.Row>
          <Grid.Row style={{ margin: 3 }}>
            <FacebookShareButton url={window.location.href}>
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
            </FacebookShareButton>
          </Grid.Row>
          <Grid.Row style={{ margin: 3 }}>
            <TwitterShareButton
              url={window.location.href}
              title="I have scored 4 out of 4 in Intestellar Git Quiz."
              about="I have scored 4 out of 4 in Intestellar Git Quiz."
            >
              <Button color="twitter">
                <Icon name="twitter" /> Twitter
              </Button>
            </TwitterShareButton>
          </Grid.Row>

          <Grid.Row style={{ margin: 3 }}>
            <LinkedinShareButton url={window.location.href}>
              <Button color="linkedin">
                <Icon name="linkedin" /> LinkedIn
              </Button>
            </LinkedinShareButton>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ResultPage;
