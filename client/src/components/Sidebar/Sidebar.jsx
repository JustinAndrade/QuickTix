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
  SegmentInline,
  Sidebar,
  Search,
  Sea,
  GridColumn
} from "semantic-ui-react";
// image
import logo from "../../qtLogo.png";

import Analytics from "../Analytics/Analytics.jsx";
import UserDropdown from "../Navigation/userDropdown";

import "./sidebar.scss";

const SidebarMenu = () => (
  <Sidebar.Pushable
    as={Segment}
    style={{ height: "100%", border: "2px solid green" }}
  >
    <Sidebar as={Menu} icon="labeled" vertical visible width="thin">
      <Menu.Item as="a">
        <img style={{ margin: "0 auto" }} src={logo} />
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

    <Sidebar.Pusher style={{ border: "2px solid blue" }}>
      <Segment style={{ backgroundColor: "#f5f7fb" }}>
        <Grid
          columns="equal"
          style={{
            display: "flex",
            padding: "1% 3%",
            alignItems: "center",
            width: "90vw"
          }}
        >
          <Header color="yellow" as="h1">
            QuickTix
          </Header>

          <Grid.Column>
            <div style={{ display: "flex" }}>
              {/* <Search
                className="search"
                float="left"
                placeholder={"Search.."}
                

                // style={{ border: "1px solid purple" }}
              /> */}
            </div>
          </Grid.Column>
          <Menu size="tiny" style={{ padding: "0" }}>
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
          <Grid.Column width={2}>
            <UserDropdown />
          </Grid.Column>
        </Grid>

        <Analytics style={{ display: "flex", float: "left" }} />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarMenu;
