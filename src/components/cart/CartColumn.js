import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Badge,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import {
  incToCount,
  decToCount,
  removeToCart,
} from "../../redux/actions/cartActions";

export default function CartColumn() {
  const currentCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setTotalCart(
      currentCart.cart.reduce(
        (total, product) =>
          total + product.fields.price * product.fields.countOfCart,
        0
      )
    );
  }, [currentCart]);
  return (
    <div>
      {currentCart.cart.length === 0 ? (
        <div>There is no Product in cart</div>
      ) : (
        <div>
          <h6>Total Price: {totalCart.toFixed(2)} $ </h6>
          <Link to="cart">
            <Badge color="success">Look at the Cart</Badge>
          </Link>
          {currentCart.cart.map((product) => (
            <Fade fluid right cascade>
              <Row className="p-1 m-1 shadow-sm justify-content-center">
                <Card
                  key={product.fields.id}
                  className="m-0 p-0 shadow-sm justify-content-center"
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
                  <div className="m-1 p-1 justify-content-center">
                    <CardImg
                      width="10%"
                      height="60%"
                      src={product.fields.image[0].thumbnails.full.url}
                      alt="CardImg"
                    />
                    <CardBody className="m-0 p-0 justify-content-center">
                      <CardText className="m-0 p-0">
                        {product.fields.price} x {product.fields.countOfCart} ={" "}
                        {product.fields.price * product.fields.countOfCart}$
                      </CardText>
                      <CardText className="m-0 p-0">
                        <Badge color="success" className="rounded-pill">
                          <Button
                            color="Info"
                            size="sm"
                            className="rounded-pill"
                            onClick={() => {
                              dispatch(decToCount(product, currentCart));
                            }}
                          >
                            -
                          </Button>
                          Count: {product.fields.countOfCart}
                          <Button
                            color="Info"
                            size="sm"
                            className="rounded-pill"
                            onClick={() => {
                              dispatch(incToCount(product, currentCart));
                            }}
                          >
                            +
                          </Button>
                        </Badge>
                        <Button
                          color="danger"
                          size="sm"
                          className="rounded-pill"
                          onClick={() => {
                            dispatch(removeToCart(product, currentCart));
                          }}
                        >
                          Remove
                        </Button>
                      </CardText>
                    </CardBody>
                  </div>
                </Card>
              </Row>{" "}
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
}

// <Fade fluid right cascade>
//   {cart.map((item) => (
//     <Row xs="5" className="p-1 shadow-sm justify-content-center">
//       <Card
//         key={item.fields.id}
//         className="m-4 p-1 shadow-sm justify-content-center"
//       >
//         <CardBody>
//           <CardTitle className="m-0 p-0 justify-content-center">
//             <strong className="m-0 p-0 justify-content-center">
//               {item.fields.trademark}
//             </strong>
//           </CardTitle>
//           <CardSubtitle>
//             <h6 className="m-0 p-0 justify-content-center">
//               {item.fields.name}
//             </h6>
//           </CardSubtitle>
//         </CardBody>
//         <div className="m-3 p-3 justify-content-center">
//           <CardImg
//             width="100%"
//             src={item.fields.image[0].thumbnails.full.url}
//             alt="CardImg"
//           />
//           <CardBody className="m-0 p-0 justify-content-center">
//             <CardText className="m-0 p-0">{item.fields.price} $</CardText>
//           </CardBody>
//         </div>
//       </Card>
//     </Row>
//   ))}
// </Fade>
