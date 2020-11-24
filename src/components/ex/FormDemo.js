import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Form, FormGroup, Label, Input, Button, Badge } from "reactstrap";

export default function FormDemo() {
  const [user, setUser] = useState({
    userName: "admin",
    password: "adminPassword",
  });
  const onchangeHandler = (e) => {
    setUser({ userName: e.target.value });
  };
  const checkUser = (e) => {
    e.preventDefault();
    alert(user.userName);
  };
  return (
    <div>
      <Link to="">
        <Badge color="warning">Go to HomePage</Badge>
      </Link>
      <h3>{user.userName}</h3>
      <Form onSubmit={checkUser}>
        <FormGroup row>
          <Label for="idEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="idEmail"
              placeholder="Your Email"
              onChange={onchangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="idPassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="idPassword"
              placeholder="Your Password"
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Label check>
              <Input type="checkbox" id="idCheckbox" /> Check me out
            </Label>
            <hr />
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
