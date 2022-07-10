import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const baseUrl = "http://localhost:5000"
const AddUser = () => {
  let param = useParams()
  let navigation = useNavigate()
  const [userFormData, setUserFormData] = useState({
    fullname: "",
    id: "",
    age: "",
    position: "",
  })

  const fetchEvent = async (id) => {
    const data = await axios.get(`${baseUrl}/users/${id}`);
    const { users } = data.data;
    setUserFormData(users);
  };

  useEffect(() => {
    if(param.id !== undefined){
      fetchEvent(param.id);
    }
  },[param.id])

  const fullnameChangeHandler = (event) => {

    setUserFormData({
        ...userFormData,
        fullname: event.target.value,
    })
  };

  const positionChangeHandler = (event) => {

    setUserFormData({
        ...userFormData,
        position: event.target.value,
    })
  };

  const ageChangeHandler = (event) => {

    setUserFormData({
        ...userFormData,
        age: event.target.value,
    })
  };

  const _addUserHandler = async (fullname, position, age, id) => {

    if (id) {
      console.log('Edit');
      const data = await axios.put(`${baseUrl}/users/${id}`, {fullname, age, position})
      navigation('/user')
    } else {
      console.log('Add');
      const data = await axios.post(`${baseUrl}/user`, {fullname, age, position})
      navigation('/user')
    }
    
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    // เพิ่ม protection
    if (userFormData.fullname.trim().length === 0 || userFormData.position.trim().length === 0 || userFormData.age.length === 0) {

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

    _addUserHandler(userFormData.fullname, userFormData.position, userFormData.age, userFormData.id);

    setUserFormData({
        fullname: '',
        id: '',
        age: '',
        position: ''
      })
  };

  const resetForm = () => {
    navigation('/user')
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
            Back
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
