import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
const AddUser = (props) => {
    // training code
    //  const [enteredFullname, setEnteredFullname] = useState("");
    //  const [enteredPosition, setEnteredPosition] = useState("");
    //  const [enteredAge, setEnteredAge] = useState("");

  // เปลี่ยนเป็น state เดียวเพื่อให้ง่ายต่อการจัดการ
  const [userFormData, setUserFormData] = useState({...props.editData})

    // เพิ่ม useEffect สำหรับจัดการค่า props ที่เปลี่ยน
  useEffect(() => {
      setUserFormData({
        fullname: props.editData.fullname,
        id: props.editData.id,
        age: props.editData.age,
        position: props.editData.position
      })
  },[props.editData])

  const fullnameChangeHandler = (event) => {
    // training code
    // setEnteredFullname(event.target.value);

    setUserFormData({
        ...userFormData,
        fullname: event.target.value,
    })
  };

  const positionChangeHandler = (event) => {
    // training code
    // setEnteredPosition(event.target.value);

    setUserFormData({
        ...userFormData,
        position: event.target.value,
    })
  };

  const ageChangeHandler = (event) => {
    // training code
    // setEnteredAge(event.target.value);

    setUserFormData({
        ...userFormData,
        age: event.target.value,
    })
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // training code
    // props.onAddUser(enteredFullname, enteredPosition ,enteredAge);

    // เพิ่ม protection
    if (userFormData.fullname.trim().length === 0 || userFormData.position.trim().length === 0 || userFormData.age.trim().length === 0) {
        // setError({
        //   title: 'Invalid input',
        //   message: 'Please enter a valid name and age (non-empty values).',
        // });
        Swal.fire({
            title: 'Invalid input',
            text: 'Please enter a valid fullname, position and age (non-empty values).'
        })
        return;
      }
      if (+userFormData.age < 1) {
        Swal.fire({
          title: 'Invalid age',
          text: 'Please enter a valid age (> 0).',
        });
        return;
      }

    props.onAddUser(userFormData.fullname, userFormData.position, userFormData.age, userFormData.id);
    
    // training code
    // setEnteredFullname('');
    // setEnteredAge('');
    // setEnteredPosition('');


    setUserFormData({
        fullname: '',
        id: '',
        age: '',
        position: ''
      })
  };

  const resetForm = () => {
      
    setUserFormData({
        fullname: '',
        id: '',
        age: '',
        position: ''
      })
  }

  return (
    <Row className="mb-2 bg-dark text-white p-2">
      <Col md={ {span: 6, offset: 2} }>
        <Form onSubmit={addUserHandler}>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fullname"
              value={userFormData.fullname}
              onChange={fullnameChangeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Position"
              value={userFormData.position}
              onChange={positionChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              min={0}
              step={1}
              value={userFormData.age}
              onChange={ageChangeHandler}
            />
          </Form.Group>
          <Button variant="danger" type="reset" className="m-1" onClick={resetForm}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="m-1">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddUser;
