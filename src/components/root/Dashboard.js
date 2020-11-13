import React from "react";

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
  return (
    <div className="container-fluid mt-4">
      <Advertisements />
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
      <Footer />
    </div>
  );
}
