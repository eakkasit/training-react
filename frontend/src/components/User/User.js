import React from "react";
// import UserList from "./UserList";
import { Row, Col, Button } from "react-bootstrap";

const User = (props) => {
  const handleDelete = (id) => {
    props.onDelete(id);
  };

  const handleEdit = (user) => {
    props.onEditData(user);
  };

  return (
      // เปลี่ยนจาก component UserList มาเป็นลูปแทนเพื่อง่ายต่อการจัดการ ถ้าไม่แยกก็สามารถส่ง prop เข้าไปได้เหมือนกัน
      props.user.map((item) => (
        <Row className="mb-2" key={item.id}>
          <Col md={3}>{item.fullname}</Col>
          <Col md={3}>{item.position}</Col>
          <Col md={3}>{item.age}</Col>
          <Col md={3}>
            <Button variant="warning" onClick={() => handleEdit(item)} className={'m-1 text-white'}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(item.id)} className={'m-1 text-whitess'}>
              Delete
            </Button>
          </Col>
        </Row>
      )
    )
  )
};

export default User;
