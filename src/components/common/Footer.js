import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import appStore from "../../image/appStore.jpg";
import playStore from "../../image/playStore.jpg";
import logo2 from "../../image/logo2.png";

import visa from "../../image/visa.png";
import master from "../../image/master.png";
import paypal from "../../image/paypal.png";
import americanExpress from "../../image/americanExpress.jpg";

export default function Footer() {
  return (
    <div>
      <Row className="shadow-sm rounded-pill border m-0 p-0 bg-info justify-content-center">
        <Col
          xs="2"
          className="justify-content-center font-weight-bold m-0 p-0 "
        >
          Download:
        </Col>
        <Col xs="2" className="justify-content-center m-0 p-0">
          <img
            className="shadow-sm justify-content-center rounded-pill m-0 p-0 "
            src={appStore}
            alt="appStore"
            width="70"
          />
        </Col>
        <Col xs="2" className="justify-content-center m-0 p-0 ">
          <img
            className="shadow-sm justify-content-center rounded-pill m-0 p-0 "
            src={playStore}
            alt="playStore"
            width="70"
          />
        </Col>
        <Col xs="1"></Col>
        <Col xs="4" className="ml-3 pl-3">
          <a href="http://localhost:3000/">
            <img
              className="shadow-sm justify-content-center"
              src={logo2}
              alt="ilyas.com"
              width="70"
            />
          </a>
        </Col>
      </Row>
      <div className="shadow-sm justify-content-center bg-dark rounded-pill">
        <Row>
          <Col xs="4">
            <p className="shadow-sm justify-content-center rounded-pill m-0 pl-5 text-light">
              All right is reserved...® &copy;
            </p>
          </Col>
          <Col xs="3"></Col>
          <Col xs="1">
            <Link to="creditcard">
              <img
                className="shadow-sm justify-content-center rounded-pill m-0 p-0"
                src={visa}
                alt="ilyas.com"
                width="30"
              />
            </Link>
          </Col>
          <Col xs="1">
            <Link to="creditcard">
              <img
                className="shadow-sm justify-content-center rounded-pill m-0 p-0"
                src={master}
                alt="ilyas.com"
                width="30"
              />{" "}
            </Link>
          </Col>
          <Col xs="1">
            <Link to="creditcard">
              <img
                className="shadow-sm justify-content-center rounded-pill m-0 p-0"
                src={paypal}
                alt="ilyas.com"
                width="30"
              />{" "}
            </Link>
          </Col>
          <Col xs="1">
            {" "}
            <Link to="creditcard">
              <img
                className="shadow-sm justify-content-center rounded-pill m-0 p-0"
                src={americanExpress}
                alt="ilyas.com"
                width="30"
              />{" "}
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
