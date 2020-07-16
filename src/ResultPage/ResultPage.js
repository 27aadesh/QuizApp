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
} from "semantic-ui-react";
import styles from "../styles.css";
import fire from "./../Config/fire";
import Certificate from "./Certificate";

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
    return (
      <>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Card fluid>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/quiz-app-ed006.appspot.com/o/Award-Ribbon-Badge-Transparent-Background.jpg?alt=media&token=d7d3e436-ebc3-4ec3-add9-d983dd28a7e3"
                wrapped
                ui={false}
              />

              <Card.Content textAlign="center">
                <h4>This Badge is awarded to</h4>
                <h1>Aadesh Jain</h1>
                <p>
                  On scoring 7 out of 10 in <b>Intestallar Git</b> Quiz on 10th
                  July 2020
                </p>
              </Card.Content>

              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
            <Button onClick={this.download}>Download Pdf</Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ResultPage;
