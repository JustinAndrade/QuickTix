import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Card,
  Advertisement
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
      <Container>
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
      </Container>
      <Container>
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
      </Container>
      <Container>
        <Grid relaxed columns={2}>
          <Grid.Column style={{ paddingLeft: "10%" }}>
            <Container text textAlign="left">
              <Header as="h3" textAlign="left">
                <Header.Content>Features</Header.Content>
                <Header.Subheader>We Help You</Header.Subheader>
              </Header>
              <p>
                Please answer the questions in this questionnaire. Your feedback
                is very valuable and will help me improve this extension.
                https://goo.gl/forms/5emac4WyQv7CWZOK2
              </p>
              <Grid columns={2}>
                <Grid.Column>
                  <Grid.Row textAlign="left">
                    <Header as="h4">Best Performance</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header.Subheader>
                      A complete about face in it's core economy Amsterdams.
                    </Header.Subheader>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row textAlign="left">
                    <Header as="h4">Best Performance</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header.Subheader>
                      A complete about face in it's core economy Amsterdams.
                    </Header.Subheader>
                  </Grid.Row>
                </Grid.Column>
                <Button>Hello</Button>
              </Grid>
            </Container>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Container>

      <Container>
        <Header as="h4">Packages</Header>
        <Header.Subheader>Pricing</Header.Subheader>
        <p>
          At QuickTix, we know resolving a problem in a timely manner matters
          most. Built with fffiency and balancing the workload in mind!
        </p>

        <Grid relaxed columns={3} style={{ paddingLeft: "3.5%" }}>
          <Grid.Column>
            <Card>
              <Card.Header>
                Basic <br />
                $65.99
                <br /> Yearly
              </Card.Header>
              <Card.Content>
                <Card.Description>Insert Description</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>Get Trial</Button>
                <br />
                <Link to="/trial">Get a free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Card.Header>
                Basic <br />
                $65.99
                <br /> Yearly
              </Card.Header>
              <Card.Content>
                <Card.Description>Insert Description</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>Get Trial</Button>
                <br />
                <Link to="/trial">Get a free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Card.Header>
                Basic <br />
                $65.99
                <br /> Yearly
              </Card.Header>
              <Card.Content>
                <Card.Description>Insert Description</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>Get Trial</Button>
                <br />
                <Link to="/trial">Get a free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <p>10,000+ professionals are recommending QuickTix.</p>
            </Grid.Column>
            <Grid.Column>
              <Button>Get Started Now</Button>
              <Button>Watch Trailer</Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </>
  );
};

export default MarketingPage;
