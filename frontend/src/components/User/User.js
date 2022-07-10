import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000"
const User = () => {

  const [userData,setUserData]= useState([]);
  let navigation = useNavigate()
  
  const fetchEvent = async () => {
    const data = await axios.get(`${baseUrl}/users`)
    const { users } = data.data
    setUserData(users)
  }

  useEffect(() => {
    fetchEvent();
  },[])

  const handleEdit = (id) => {
    navigation(`/user/edit/${id}`)
  }

  const handleDelete = async (id) => {
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
           axios.delete(`${baseUrl}/users/${id}`)
          const updatedList = userData.filter(user => user.id !== id)
          setUserData(updatedList);
        }
      })
     
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleAddNewUser = () => {
    navigation(`/user/new`)
  };

  return (
      // เปลี่ยนจาก component UserList มาเป็นลูปแทนเพื่อง่ายต่อการจัดการ ถ้าไม่แยกก็สามารถส่ง prop เข้าไปได้เหมือนกัน
      <>
      <div className="d-flex justify-content-end">
          <Button onClick={handleAddNewUser}>AddUser</Button>
        </div>
      { userData.map((item) => (
          <Row className="mb-2" key={item.id}>
            <Col md={3}>{item.fullname}</Col>
            <Col md={3}>{item.position}</Col>
            <Col md={3}>{item.age}</Col>
            <Col md={3}>
              <Button variant="warning" onClick={() => handleEdit(item.id)} className={'m-1 text-white'}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)} className={'m-1 text-whitess'}>
                Delete
              </Button>
            </Col>
          </Row>
        )
        )
      }
    
    </>
  )
};

export default User;
