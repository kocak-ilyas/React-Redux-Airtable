import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getTopNavbar } from  "../../redux/actions/getActions";

export default function TopNavbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopNavbar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topNavs = useSelector((state) => state.topNavbarReducer);
  const [navBottom, setNavBottom] = useState(false);

  return (
    <div>
      <Navbar color="faded" light>
        <Col xs="3">
          <Button
            onMouseOver={() => setNavBottom(true)}
            onMouseOut={() => setNavBottom(false)}
            className="rounded-pill"
            color="danger"
          >
            All Products
          </Button>
        </Col>
        <Col xs="2">
          <Button className="rounded-pill" color="primary">
            Campaign
          </Button>
        </Col>
        <Col xs="2">
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret>Order</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Latest</DropdownItem>
              <DropdownItem>Lowest</DropdownItem>
              <DropdownItem>Highest</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="1">
          <p className="border-left m-1 p-2">Get Distributor</p>
        </Col>
        <Col xs="1">
          <p className="border-left m-1 p-2">Message</p>
        </Col>
        <Col xs="1">
          <p className="border-left m-1 p-2">Orders</p>
        </Col>
        <Col xs="1">
          <p className="border-left m-1 p-2">Contact Us</p>
        </Col>
        <Col xs="1">
          <p className="border-left m-1 p-2">TR/EN</p>
        </Col>
        <Collapse isOpen={navBottom} navbar>
          <Nav
            className="border-left m-1 p-2"
            onMouseOver={() => setNavBottom(true)}
            onMouseOut={() => setNavBottom(false)}
          >
            <Col xs="3">
              <NavItem>
                <NavLink href="/components/">Trademark</NavLink> <hr />
                <ListGroup>
                  {topNavs.map(
                    (item) =>
                      item.fields.id & (item.fields.trademark !== undefined) ? (
                        <ListGroupItem key={item.fields.id} tag="a" href="#">
                          {item.fields.trademark}
                        </ListGroupItem>
                      ) : null // console.log("some trademarks is not found")
                  )}
                </ListGroup>
              </NavItem>
            </Col>
            <Col xs="3">
              <NavItem>
                <NavLink href="/components/">Category</NavLink> <hr />
                <ListGroup>
                  {topNavs.map(
                    (item) =>
                      item.fields.id & (item.fields.category !== undefined) ? (
                        <ListGroupItem key={item.fields.id} tag="a" href="#">
                          {item.fields.category}
                        </ListGroupItem>
                      ) : null // console.log("some category is not found")
                  )}
                </ListGroup>
              </NavItem>
            </Col>
            <Col xs="3">
              <NavItem>
                <NavLink href="/components/">Gender</NavLink> <hr />
                <ListGroup>
                  {topNavs.map(
                    (item) =>
                      item.fields.id & (item.fields.gender !== undefined) ? (
                        <ListGroupItem key={item.fields.id} tag="a" href="#">
                          {item.fields.gender}
                        </ListGroupItem>
                      ) : null //  console.log("some gender is not found")
                  )}
                </ListGroup>
              </NavItem>
            </Col>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
