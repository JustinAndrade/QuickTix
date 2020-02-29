import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Divider,
  TextArea
} from "semantic-ui-react";

import "./marketing.scss";

const MarketingPage = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2%"
        }}
      >
        <h1>QuickTix</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </Container>
      <Container>
        <Header as="h2" icon textAlign="center" size="huge">
          <Header.Content>Task managment done right!</Header.Content>
          <Header.Subheader>
            <Button>Get Started Now</Button>
            <Button>Watch Trailer</Button>
          </Header.Subheader>
        </Header>
      </Container>
      <Segment>
        <Header as="h3" textAlign="center">
          <Header.Content>Features</Header.Content>
          <Header.Subheader>Our Solutions</Header.Subheader>
        </Header>

        <Grid relaxed columns={4}>
          <Grid.Column>
            <h1>Hi</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Hi</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Hi</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Hi</h1>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid relaxed columns={2}>
          <Grid.Column></Grid.Column>
          <Grid.Column style={{ paddingLeft: "5%" }}>
            <Header as="h3" textAlign="left">
              <Header.Content>Features</Header.Content>
              <Header.Subheader>Why Choose Us</Header.Subheader>
            </Header>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid relaxed columns={2}>
          <Grid.Column style={{ paddingLeft: "10%" }}>
            <Header as="h3" textAlign="left">
              <Header.Content>Features</Header.Content>
              <Header.Subheader>We Help You</Header.Subheader>
            </Header>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Header as="h4">Best Performance</Header>
                  <Header.Subheader>
                    A complete about face in it's core economy Amsterdams.
                  </Header.Subheader>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default MarketingPage;
