import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const UserList = (props) => {
    const user = props.user;
    const fullname = props.user.fullname;
    const position = props.user.position;
    const age = props.user.age;
    const id = props.user.id;

    const handleDelete = (id) => {
      props.onDelete(id);
    };

    const handleEdit = (user) => {
      props.onEdit(user);
    };

  return (
    <Row className="mb-2">
      <Col md={3}>{fullname}</Col>
      <Col md={3}>{position}</Col>
      <Col md={3}>{age + 1}</Col>
      <Col md={3}>
        <Button variant="warning" onClick={() => handleEdit(user)}>Edit</Button>
        <Button variant="danger" onClick={() => handleDelete(id)}>Delete</Button>
      </Col>
    </Row>
  );
}
export default UserList;
