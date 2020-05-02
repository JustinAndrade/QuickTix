import React from "react";
import {
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Search,
  Sea,
} from "semantic-ui-react";
// image
import logo from "../../qtLogo.png";

import { Analytics, TicketList } from "../../components/";

import "./dashboard.scss";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar.Pushable style={{ height: "100vh" }} as={Segment}>
        <Sidebar as={Menu} icon="labeled" vertical visible width="thin">
          <Menu.Item as="a">
            <img style={{ width: "80%", margin: "0 auto" }} src={logo} />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="bars" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="user outline" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="clipboard outline" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="lightbulb outline" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="chart bar" />
          </Menu.Item>

          <Menu.Item as="a">
            <Icon name="keyboard outline" />
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Container
              style={{
                width: "85vw",
                display: "flex",
                justifyContent: "space-between",
                float: "left",
              }}
            >
              <Header color="yellow" as="h1">
                QuickTix
              </Header>
              <Search placeholder={"Search.."} size="tiny" />
              <Segment
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  boxShadow: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <Menu style={{ margin: "0 10% 0 0" }}>
                  <Menu.Item as="a">
                    <Icon name="user outline" />
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Icon name="question" />
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Icon name="bell outline" />
                  </Menu.Item>
                </Menu>
                <Grid columns={1}>
                  <Grid.Column>
                    <Card>
                      <p>Username</p>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Container>
            <Segment basic>
              {/* Insert Info Here */}

              <Analytics />
              <TicketList style={{ height: "1000px" }} />
            </Segment>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};
