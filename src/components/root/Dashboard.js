import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import "../../styles/styles.css";

import Advertisements from "../common/Advertisements";
import Search from "../common/Search";
import TopNavbar from "../navi/TopNavbar";
import ShowCarousel from "../common/ShowCarousel";
import Products from "../products/Products";
import CartColumn from "../cart/CartColumn";
import Footer from "../common/Footer";

export default function Dashboard() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <div className="container-fluid mt-4">
      <Advertisements />
             <a href="https://www.google.com/maps/place/Rag%C4%B1p+T%C3%BCz%C3%BCn,+Rag%C4%B1p+T%C3%BCz%C3%BCn+Cd.+No:143,+06170+Yenimahalle%2FAnkara/@39.9659687,32.8090921,51m/data=!3m1!1e3!4m5!3m4!1s0x14d34ead2806be7d:0x580a3e66f2b254fb!8m2!3d39.965932!4d32.809137" className='text iconSpan'>address</a>
      <Fade fluid bottom cascade>
        <Container fluid>
          <Search />
          <TopNavbar />
          <Row>
            <Col xs="10">
              <ShowCarousel />
              <hr />
              <Products />
            </Col>
            <Col xs="2" className="border shadow-lg">
              <CartColumn />
            </Col>
          </Row>
        </Container>
      </Fade>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        <CircularProgress />
      </p>
      <Footer />
    </div>
  );
}
