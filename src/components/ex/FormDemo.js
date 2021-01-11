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
          <Col sm={7}>
            <Input
              type="email"
              name="email"
              id="idEmail"
              placeholder="Your Email"
              onChange={onchangeHandler}
            />
          </Col>
          <Col sm={{ size: 2, offset: 1 }}>
            <Label check>
              <Button color="link" outline className="m-0 p-0">
                <h4 className="m-0 p-0">
                  <Badge color="info" pill className="m-1 p-1">
                    Check me out
                  </Badge>
                </h4>
              </Button>
            </Label>
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
          <Col check col sm={{ size: 10, offset: 2 }}>
            <hr />
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
