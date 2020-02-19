import React from "react";
import {
  Container,
  Card,
  Grid,
  Divider,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Search,
  Sea,
  GridColumn
} from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import ProgressBar from "./progressBar";
import ResponseTrends from "./responseTrends";

import "./analytics.scss";
import Projects from "./projects";

export const cardStyle = {
  margin: "5px",
  width: "30%",
  height: "4500px"
};

const Analytics = () => (
  <Container
    style={{
      border: "2px solid red",
      marginLeft: "0 !important"
    }}
  >
    <Grid
      columns="equal"
      style={{
        border: "2px solid red",
        marginLeft: "1%",
        marinRight: "1%"
      }}
    >
      <Grid.Column>
        <ProgressBar />
      </Grid.Column>
      <Grid.Column width={8}>
        <Projects />
      </Grid.Column>
      <Grid.Column>
        <ResponseTrends />
      </Grid.Column>
    </Grid>
  </Container>
);

export default Analytics;
