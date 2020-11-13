import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
} from "reactstrap";
import Fade from "react-reveal/Fade";

import { getProducts } from  "../../redux/actions/getActions";
import { addToCart } from  "../../redux/actions/cartActions";

export default function Products() {
  const cart = useSelector((state) => state.cartReducer);
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fade fluid right cascade>
      <Row xs="5" className="p-1 shadow-sm justify-content-center">
        {products.map((product) => (
          <Card
            key={product.fields.id}
            className="m-4 p-1 shadow-sm justify-content-center"
            // onMouseOver={() => setShowCart(true)}
            // onMouseOut={() => setShowCart(false)}
          >
            <CardBody>
              <CardTitle className="m-0 p-0 justify-content-center">
                <strong className="m-0 p-0 justify-content-center">
                  {product.fields.trademark}
                </strong>
              </CardTitle>
              <CardSubtitle>
                <h6 className="m-0 p-0 justify-content-center">
                  {product.fields.name}
                </h6>
              </CardSubtitle>
            </CardBody>
            <div className="m-3 p-3 justify-content-center">
              <CardImg
                width="100%"
                src={product.fields.image[0].thumbnails.full.url}
                alt=""
              />
              {/* {product.fields.showCart && ( */}
              {/* {showCart && ( */}
              <CardBody className="m-0 p-0 justify-content-center">
                <CardText className="m-0 p-0">
                  {product.fields.price} $
                </CardText>
                <CardLink
                  onClick={() => {dispatch(addToCart(product, cart))}}
                  href="#"
                  className="m-0 p-0"
                >
                  Add to Cart
                </CardLink>
              </CardBody>
              {/* )} */}
            </div>
          </Card>
        ))}
      </Row>
    </Fade>
  );
}
