import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import User from "./components/User/User";
import { Container } from "react-bootstrap";
import AddUser from "./components/User/AddUser";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { UserPage } from "./pages/UserPage";
import Counter from "./components/Counter";


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



function App() {
  

  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}>
          {/* <Route path=":name"  element={<UserPage />}/> */}
          {/* <Route path="new"  element={<AddUser />}/>
          <Route path="edit"  element={<AddUser />}>
            <Route path=":id"  element={<AddUser />}/>
          </Route> */}
        </Route>
        <Route path="/user/new" element={<AddUser />} />
        <Route path="/user/edit" element={<AddUser />}>
          <Route path=":id" element={<AddUser />}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Counter />
      <Footer />

      {/* <AddUser onAddUser={addUserHandler} editData={userEditData}  />
      <User user={userData} onDelete={handleDelete} onEditData={handleEdit}/> */}
    </Container>
  );
}

export default App;
