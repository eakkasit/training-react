import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/User/User";
import { Container } from "react-bootstrap";
import AddUser from "./components/User/AddUser";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import Counter from "./components/Counter";

function App() {
  

  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}>
        </Route>
        <Route path="/user/new" element={<AddUser />} />
        <Route path="/user/edit" element={<AddUser />}>
          <Route path=":id" element={<AddUser />}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Counter />
      <Footer />
    </Container>
  );
}

export default App;
