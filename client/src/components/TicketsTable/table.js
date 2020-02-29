import React from "react";
import faker from "faker";
import { Button, Checkbox, Icon, Table, Label } from "semantic-ui-react";
import { Progress } from "semantic-ui-react";

import AddTicketModal from "./AddTicket";

const ProgressExampleLabelProp = () => <Progress percent={55} label="Label" />;

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black"
];

const TicketsTable = () => (
  <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>
          <Checkbox />
        </Table.HeaderCell>
        <Table.HeaderCell>TITLE</Table.HeaderCell>
        <Table.HeaderCell>PRIORITY</Table.HeaderCell>
        <Table.HeaderCell>ASSIGNED TO</Table.HeaderCell>
        <Table.HeaderCell>CREATED ON</Table.HeaderCell>
        <Table.HeaderCell>TAGET ID</Table.HeaderCell>
        <Table.HeaderCell>AGE</Table.HeaderCell>
        <Table.HeaderCell>PROGRESS</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="red">High</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing textAlign>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{faker.name.findName()}</Table.Cell>
        <Table.Cell>
          <Label color="green">Done</Label>
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>2.28.2020</Table.Cell>
        <Table.Cell>{faker.random.number()}</Table.Cell>
        <Table.Cell>
          <Label circular color="yellow">
            10
          </Label>
        </Table.Cell>
        <Table.Cell>
          <ProgressExampleLabelProp />
        </Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="7">
          <AddTicketModal />

          <Button size="tiny">Approve</Button>
          <Button disabled size="small">
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TicketsTable;
