import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
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
import TicketsTable from "../TicketsTable/table";

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
      marginRight: "0 !important",
      marginLeft: "0 !important",
      width: "90vw"
    }}
  >
    <Grid
      stretched
      columns={3}
      style={{
        border: "5px solid yellow",
        justifyContent: "space-around",
        margin: "auto"
      }}
    >
      <Grid.Row verticalAlign>
        <Grid.Column width={4}>
          <Card fluid>
            <CardHeader textAlign="left">Tickets</CardHeader>
            <CardContent></CardContent>
            <ProgressBar />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <CardHeader textAlign="left">Projects</CardHeader>
            <CardContent style={{ padding: "50px 0 0 0" }}>
              <Projects />
            </CardContent>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <CardHeader textAlign="left">TSR Response Trends</CardHeader>
            <CardContent style={{ padding: "50px 0 0 0" }}>
              <ResponseTrends />
            </CardContent>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <TicketsTable />
  </Container>
);

export default Analytics;
