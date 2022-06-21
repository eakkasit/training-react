import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import User from "./components/User/User";
import { Container } from "react-bootstrap";
import AddUser from "./components/User/AddUser";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'


// const userDataFake = [
//   {
//     fullname: "Jonh Lenon",
//     position: "Singer",
//     age: 39,
//     id: 1,
//   },
//   {
//     fullname: "Jonh Chaorai",
//     position: "Farmer",
//     age: 60,
//     id: 2,
//   },
// ];

const baseUrl = "http://localhost:5000"

function App() {
  const [userData,setUserData]= useState([]);
  // เพิ่มตัวแปรเพื่อ set ค่า default ของ user form
  const [userEditData,setEditUserData]= useState({
    fullname: '',
    id: '',
    age: '',
    position: '',
  });
  
  const addUserHandler = async (fullname, position, age, id) => {
    // training code
    // setUserData((prevUserData) => {
    //   return [
    //     ...prevUserData,
    //     { fullname: fullname, position: position, age: age, id: Math.random().toString() },
    //   ];
    // });

    if (id) {
      console.log('Edit');
      const data = await axios.put(`${baseUrl}/users/${id}`, {fullname, age, position})
      const updatedEvent = data.data.user;
      const updatedList = userData.map(user => {
        if(user.id === id){
          return user = updatedEvent
        }
        return user
      })
      setUserData(updatedList)
    } else {
      console.log('Add');
      const data = await axios.post(`${baseUrl}/user`, {fullname, age, position})
      setUserData([...userData, data.data])
    }
    
  };

  const fetchEvent = async () => {
    const data = await axios.get(`${baseUrl}/users`)
    const { users } = data.data
    setUserData(users)
  }

  useEffect(() => {
    fetchEvent();
  },[])

  const handleEdit = (user) => {
    setEditUserData({
      fullname:user.fullname,
      id:user.id,
      age:user.age,
      position:user.position
    })
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

  return (
    <Container fluid>
      <AddUser onAddUser={addUserHandler} editData={userEditData}  />
      <User user={userData} onDelete={handleDelete} onEditData={handleEdit}/>
    </Container>
  );
}

export default App;
