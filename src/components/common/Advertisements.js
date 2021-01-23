import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

import { getAdvertisements } from "../../redux/actions/getActions";
import closeIcon from "../../image/closeIcon.jpg";

export default function Advertisements() {
  useEffect(() => {
    dispatch(getAdvertisements());
  }, []);
  const advertisements = useSelector((state) => state.advertisementsReducer);
  const dispatch = useDispatch();
  const [fadeIn, setFadeIn] = useState(true);
  return (
    fadeIn && (
      <div>
        <Row className="themed-container border rounded-pill m-1 p-1 backgroundClock">
          <Col xs="11">
            <Container fluid={true}>
              <Fade left cascade>
                <Row>
                  <Col xs="1"></Col>
                  {advertisements.map((item) =>
                    item.fields.image !== undefined ? (
                      <Col
                        key={item.fields.image[0].id}
                        sm="1"
                        className="m-0 p-0"
                      >
                        <a href={item.fields.url}>
                          <img
                            width="100px"
                            className="img-fluid border rounded-lg m-0 p-0"
                            src={item.fields.image[0].thumbnails.full.url}
                            alt={item.fields.image[0].filename}
                          />
                        </a>
                      </Col>
                    ) : (
                      console.log("some images is not found")
                    )
                  )}
                </Row>
              </Fade>
            </Container>
          </Col>
          <Col xs="1" lg>
            <img
              src={closeIcon}
              alt="closeIcon"
              onClick={() => setFadeIn(!fadeIn)}
              className="mt-4 p-0 rounded-pill"
              width="100%"
            />
          </Col>
        </Row>
        <hr />
      </div>
    )
  );
}
