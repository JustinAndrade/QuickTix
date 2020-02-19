import faker from "faker";
import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

const trigger = (
  <span style={{ display: "flex" }}>
    <Image avatar src={faker.internet.avatar()} />
    Justin Andrade
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

const UserDropdown = () => (
  <Dropdown
    trigger={trigger}
    options={options}
    pointing="top left"
    icon={null}
  />
);

export default UserDropdown;
