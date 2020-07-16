import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Document, Text, Page } from "@react-pdf/renderer";

class Certificate extends Component {
  render() {
    return (
      <Document>
        <Page size="A4">
          <Grid
            textAlign="center"
            style={{ height: "100vh", marginTop: 10 }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 900 }}>
              <Card
                raised
                style={{
                  height: 600,
                  width: 900,
                  opacity: 1,
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/quiz-app-ed006.appspot.com/o/487138-PH2YXP-639.jpg?alt=media&token=2aaab52e-3671-426f-bf11-e0413d2f7e7f)`,
                  backgroundSize: "cover",

                  fontWeight: "normal",
                  marginBottom: 0,
                }}
              >
                <Card.Header
                  textAlign="center"
                  style={{
                    color: "grey",
                    marginTop: 255,
                    marginLeft: 250,
                  }}
                >
                  <Text>Aadesh Jain</Text>
                </Card.Header>
                <Card.Description
                  textAlign="center"
                  style={{
                    color: "grey",
                    marginTop: 35,
                    marginLeft: 250,
                  }}
                >
                  <p>
                    On Successful Completion of <b>Intestallar Git</b> Quiz on
                    Quizzy.com
                  </p>
                </Card.Description>
                <Card.Header
                  style={{
                    color: "grey",
                    marginTop: 85,
                    marginLeft: -200,
                  }}
                >
                  <h3>25/08/2020</h3>
                </Card.Header>
              </Card>
            </Grid.Column>
          </Grid>
        </Page>
      </Document>
    );
  }
}

export default Certificate;
