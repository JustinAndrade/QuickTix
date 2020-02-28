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
  { key: "m", text: "engineering", value: "Engineering" },
  { key: "f", text: "marketing", value: "Marketing" },
  { key: "z", text: "front_desk", value: "Front Desk" },
  { key: "o", text: "other", value: "other" }
];

class AddTicketModal extends React.Component {
  state = {
    title: "",
    email: "",
    description: "",
    department: ""
  };

  selectChange = (e, { value }) => {
    this.setState({ value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    const { value } = this.state;
    return (
      <Modal
        closeIcon
        trigger={
          <Button floated="right" primary size="large">
            Create Ticket
          </Button>
        }
      >
        <Header icon="ticket" content="Create New Ticket" />
        <Modal.Content>
          <Form>
            <Form.Field
              required
              control={Input}
              label="Title"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Group widths="equal">
              <Form.Field
                required
                control={Input}
                label="Email"
                placeholder="Your Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Field
                width={8}
                required
                control={Select}
                label="Department"
                options={options}
                placeholder="Select Department"
                name="department"
                onChange={this.selectChange}
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
              style={{ height: "300px" }}
              control={TextArea}
              label="Description"
              placeholder="Tell us more about the issue..."
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
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
