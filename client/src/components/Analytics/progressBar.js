import React from "react";
import { Card, Progress, CardHeader, Container } from "semantic-ui-react";

const ProgressBar = () => (
  <Container style={{ padding: "2%" }}>
    <Progress value={35} total={20} progress="ratio">
      Open Tickets
    </Progress>
    <Progress value={12} total={20} progress="ratio">
      High Priority
    </Progress>
    <Progress value={22} total={20} progress="ratio">
      Waiting on me
    </Progress>
    <Progress value={3} total={20} progress="ratio">
      Unassigned
    </Progress>
  </Container>
);

export default ProgressBar;
