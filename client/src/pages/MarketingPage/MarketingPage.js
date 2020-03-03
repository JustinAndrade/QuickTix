import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Card,
  Icon,
  Statistic
} from "semantic-ui-react";

import laptop from "../../assets/LaptopVector.png";
import dashSamp from "../../assets/dashboardSample.png";

import "./marketing.scss";

const MarketingPage = () => {
  return (
    <>
      <div className="layout">
        <Container
          className="topBar"
          style={{
            display: "flex",
            padding: "2%",
            paddingBottom: "5px",
            borderBottom: "1px solid white",
            borderBottom: "1px solid rgba(255, 255, 255, .5)",
            webkitBackgroundClip: "padding-box",
            backgroundClip: "padding-box"
          }}
        >
          <h1>QuickTix</h1>
          <nav>
            <NavLink to="/">Features</NavLink>
            <NavLink to="/about-us">Instructions</NavLink>
            <NavLink to="/contact">Process</NavLink>
            <NavLink to="/contact">Feedback</NavLink>
            <NavLink to="/contact">Pricing</NavLink>
            <NavLink to="/contact">Get The App</NavLink>
          </nav>
        </Container>
        <Container style={{ marginTop: "7%" }}>
          <Header as="h2" icon textAlign="center" size="huge">
            <Header.Content>Task managment done right!</Header.Content>
            <Header.Subheader>
              <Button className="headerButton">Get Started Now</Button>
              <Button className="headerButton">Watch Trailer</Button>
            </Header.Subheader>
          </Header>
        </Container>
        <img
          className="laptopVec"
          src={laptop}
          alt="laptop displaying charts"
        />
      </div>

      <Container style={{ marginTop: "20%" }}>
        <Header as="h3" textAlign="center">
          <Header.Content className="topText">Features</Header.Content>
          <Header.Subheader className="bottomText">
            Our Solutions
          </Header.Subheader>
        </Header>
        <Container className="solutions">
          <Grid relaxed columns={4}>
            <Grid.Column>
              <Icon
                style={{ background: "#E8EAF9", color: "#1833C8" }}
                circular
                name="expand arrows alternate"
                size="huge"
              />
              <h4>Expand Your Reach</h4>
              <p>A complete about-face in its core economy Amsterdams</p>
            </Grid.Column>
            <Grid.Column>
              <Icon
                style={{ background: "#FEF9ED", color: "#FDC75D" }}
                circular
                name="eye"
                size="huge"
              />
              <h4>Higher Annualized Growth</h4>
              <p>A complete about-face in its core economy Amsterdams</p>
            </Grid.Column>
            <Grid.Column>
              <Icon
                style={{ background: "#FEF1EE", color: "#E88262" }}
                circular
                name="sync"
                size="huge"
              />
              <h4>Book Your Provider</h4>
              <p>Amsterdams progressive multicultural conscientious</p>
            </Grid.Column>
            <Grid.Column>
              <Icon
                style={{ background: "#F9F0FF", color: "#BB6AE7" }}
                circular
                name="universal access"
                size="huge"
              />
              <h4>Secure multi-usable</h4>
              <p>Core economy Amsterdams progressive multi</p>
            </Grid.Column>
          </Grid>
        </Container>
        <Container style={{ marginTop: "20%" }}>
          <Grid relaxed columns={2}>
            <Grid.Column>
              <img
                src={laptop}
                alt="laptop display data"
                className="chooseVec"
              />
            </Grid.Column>
            <Grid.Column style={{ paddingLeft: "5%" }}>
              <Header as="h3" textAlign="left">
                <Header.Content className="topText">Features</Header.Content>
                <Header.Subheader className="bottomText">
                  Why Choose Us
                </Header.Subheader>
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
        <Container style={{ marginTop: "20%" }}>
          <Grid relaxed columns={2}>
            <Grid.Column style={{}}>
              <Container text textAlign="left">
                <Header as="h3" textAlign="left">
                  <Header.Content className="topText">Features</Header.Content>
                  <Header.Subheader className="bottomText">
                    We Help You
                  </Header.Subheader>
                </Header>
                <p>
                  Please answer the questions in this questionnaire. Your
                  feedback is very valuable and will help me improve this
                  extension. https://goo.gl/forms/5emac4WyQv7CWZOK2
                </p>
                <Grid columns={2}>
                  <Grid.Column>
                    <Grid.Row textAlign="left">
                      <Header as="h4">
                        <Icon name="cubes" color="pink" />
                        Best Performance
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header.Subheader>
                        A complete about face in it's core economy Amsterdams.
                      </Header.Subheader>
                    </Grid.Row>
                    <Button
                      style={{
                        background: "#9818d6",
                        color: "#fff",
                        fontSize: "1.4rem",
                        width: "60%",
                        marginTop: "15%"
                      }}
                    >
                      I'm Interested
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid.Row textAlign="left">
                      <Header as="h4">
                        <Icon name="cubes" color="blue" />
                        Best Performance
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header.Subheader>
                        A complete about face in it's core economy Amsterdams.
                      </Header.Subheader>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <img
                src={dashSamp}
                alt="laptop display data"
                className="dashSamp"
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Container style={{ marginTop: "10%" }}>
        <Header className="topText" as="h4">
          Packages
        </Header>
        <Header.Subheader className="bottomText">Pricing</Header.Subheader>
        <p>
          At QuickTix, we know resolving a problem in a timely manner matters
          most. Built with fffiency and balancing the workload in mind!
        </p>

        <Grid
          relaxed
          columns={3}
          style={{ paddingLeft: "3.5%", textAlign: "center" }}
        >
          <Grid.Column>
            <Card
              className="card"
              style={{
                boxShadow: "0 -10px 0 #9818d6",
                border: "1px solid #9818d6"
              }}
            >
              <Card.Header>
                <h3 className="cardText">Standard</h3>
                <Statistic>
                  <Statistic.Value>$65.99</Statistic.Value>
                  <Statistic.Label
                    style={{
                      margin: "0 auto 10px"
                    }}
                  >
                    Yearly
                  </Statistic.Label>
                </Statistic>
              </Card.Header>
              <Card.Content>
                <Card.Description className="cardDescription">
                  <h5>Great job, Small Work</h5>
                  <ul>
                    <li>50 GB Bandwith</li>
                    <li>Business &amp; Finance</li>
                    <li>24 hour support</li>
                    <li>Customer Management</li>
                  </ul>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  style={{
                    background: "none",
                    background: " #9818d6",
                    color: "#fff"
                  }}
                >
                  Choose Plan
                </Button>
                <br />
                <Link to="/trial">Get Your 30 day free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card
              className="card"
              style={{
                boxShadow: "0 -10px 0 #fbbc00",
                border: "1px solid #fbbc00"
              }}
            >
              <Card.Header>
                <h3 className="cardText">Standard</h3>
                <Statistic>
                  <Statistic.Value>$65.99</Statistic.Value>
                  <Statistic.Label
                    style={{
                      margin: "0 auto 10px"
                    }}
                  >
                    Yearly
                  </Statistic.Label>
                </Statistic>
              </Card.Header>
              <Card.Content>
                <Card.Description className="cardDescription">
                  <h5>Great job, Small Work</h5>
                  <ul>
                    <li>50 GB Bandwith</li>
                    <li>Business &amp; Finance</li>
                    <li>24 hour support</li>
                    <li>Customer Management</li>
                  </ul>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  style={{
                    background: "none",
                    background: " #fbbc00",
                    color: "#fff"
                  }}
                >
                  Choose Plan
                </Button>
                <br />
                <Link to="/trial">Get Your 30 day free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card
              className="card"
              style={{
                boxShadow: "0 -10px 0 #1e052a",
                border: "1px solid #1e052a"
              }}
            >
              <Card.Header>
                <h3 className="cardText">Standard</h3>
                <Statistic>
                  <Statistic.Value>$65.99</Statistic.Value>
                  <Statistic.Label
                    style={{
                      margin: "0 auto 10px"
                    }}
                  >
                    Yearly
                  </Statistic.Label>
                </Statistic>
              </Card.Header>
              <Card.Content>
                <Card.Description className="cardDescription">
                  <h5>Great job, Small Work</h5>
                  <ul>
                    <li>50 GB Bandwith</li>
                    <li>Business &amp; Finance</li>
                    <li>24 hour support</li>
                    <li>Customer Management</li>
                  </ul>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  style={{
                    background: "none",
                    background: " #1e052a",
                    color: "#fff"
                  }}
                >
                  Choose Plan
                </Button>
                <br />
                <Link to="/trial">Get Your 30 day free trial</Link>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Segment style={{ border: "none" }}>
          <Grid
            className="marketing"
            columns={2}
            style={{ background: "#9818d6" }}
          >
            <Grid.Column>
              <h5 style={{ margin: "auto 0" }}>
                10,000+ professionals are recommending QuickTix.
              </h5>
            </Grid.Column>
            <Grid.Column
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button style={{ background: "#fbbc00" }}>Get Started Now</Button>
              <Button style={{ background: "#fbbc00" }}>Watch Trailer</Button>
            </Grid.Column>
          </Grid>
        </Segment>
        <Container style={{ marginTop: "20%" }}>
          <Header as="h3" textAlign="center">
            <Header.Content className="topText">Process</Header.Content>
            <Header.Subheader className="bottomText">
              How it Works
            </Header.Subheader>
            <p>
              With great details and an excellent managment system, QuickTix
              gets you the data you need in a timely manner. Focus tasks by
              priority and contineu building onto projects.
            </p>
          </Header>
          <Grid columns={3}>
            <Grid.Column>
              <Card>
                <Icon name="coffee" size="massive" />
              </Card>
              <p>
                With great details and an excellent managment system, QuickTix
                gets you the data you need in a timely manner. Focus tasks by
                priority and contineu building onto projects.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Icon name="coffee" size="massive" />
              </Card>
              <p>
                With great details and an excellent managment system, QuickTix
                gets you the data you need in a timely manner. Focus tasks by
                priority and contineu building onto projects.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Icon name="coffee" size="massive" />
              </Card>
              <p>
                With great details and an excellent managment system, QuickTix
                gets you the data you need in a timely manner. Focus tasks by
                priority and contineu building onto projects.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default MarketingPage;
