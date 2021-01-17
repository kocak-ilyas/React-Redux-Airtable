import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup, InputGroupAddon, Input, Button} from "reactstrap";

import logo from "../../image/logo.png";
import searchIcon from "../../image/searchIcon.png";
import signIn from "../../image/signIn.jpg";

export default function Search() {
  return (
    <Row>
      <Col xs="1" className="justify-content-center">
        <a href="http://localhost:3000/">
          <img
            className="shadow-sm justify-content-center"
            src={logo}
            alt="ilyas.com"
            width="80px"
            height="43px"
          />
        </a>
      </Col>
      <Col xs="10">
        <InputGroup
          className="rounded-pill border shadow-sm justify-content-center"
          size="md"
        >
          <InputGroupAddon addonType="prepend">
            <img
              src={searchIcon}
              alt="search"
              className="rounded-pill border-8"
              height="40px"
            />
          </InputGroupAddon>
          <Input placeholder="All Watches..." className="border-0" />
          <InputGroupAddon addonType="append">
            <Button
              color="info"
              className="rounded-right border-8"
              height="30px"
            >Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      <Col
        xs="1"
        className="badge-light shadow-sm justify-content-center border badge-pill m-0 p-0"
      >
        <Link to="signIn">
          <img
            src={signIn}
            alt="Sign"
            className="shadow-sm justify-content-center rounded-pill mr-1 p-0"
            height="40px"
          />Sign In</Link>
      </Col>
    </Row>
  );
}