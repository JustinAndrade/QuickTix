import React from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Engineering", value: "engineering" },
  { key: "f", text: "Marketing", value: "marketing" },
  { key: "o", text: "Front Desk", value: "front_desk" },
  { key: "o", text: "Other", value: "other" }
];

class AddTicketModal extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <Modal
        trigger={
          <Button floated="right" primary size="large">
            Create Ticket
          </Button>
        }
        closeIcon
      >
        <Header icon="ticket" content="Create New Ticket" />
        <Modal.Content>
          <Form>
            <Form.Field
              required
              control={Input}
              label="Title"
              placeholder="Title"
            />
            <Form.Group widths="equal">
              <Form.Field
                required
                control={Input}
                label="email"
                placeholder="email"
              />
              <Form.Field
                width={8}
                required
                control={Select}
                label="Department"
                options={options}
                placeholder="Department"
              />
            </Form.Group>
            <Form.Group inline>
              <label>Quantity</label>
              <Form.Field
                control={Radio}
                label="One"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Two"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Three"
                value="3"
                checked={value === "3"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              required
              control={TextArea}
              label="Description"
              placeholder="Tell us more about the issue..."
              style={{ height: "300px" }}
            />
            <Form.Field color="green" control={Button}>
              Submit
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
export default AddTicketModal;
