import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store";

export const Header = () => {
    const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loginHandler = (event) => {
    // console.log('Login');

    event.preventDefault();
    // Do something
    dispatch(authActions.login());
  };

  return (
    <Navbar bg="light" arial="light" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="/">Training React</Navbar.Brand>
        <Navbar.Toggle arial-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="me-auto mt-2 mt-lg-0">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/user">
              User
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            
          </Nav>
          {!isAuth ? (
            <Form className="form-inline my-2 my-lg-0" onSubmit={loginHandler}>
              <Form.Control
                className="me-sm-2"
                type="text"
                placeholder="Username"
                aria-label="Username"
              />
              <Form.Control
                className="me-sm-2"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
              <Button
                variant="outline-success"
                type="submit"
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Login
              </Button>
            </Form>
          ) : (
            <Button
              variant="outline-danger"
              type="button"
              onClick={logoutHandler}
              className="btn btn-outline-danger my-2 my-sm-0"
            > 
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
