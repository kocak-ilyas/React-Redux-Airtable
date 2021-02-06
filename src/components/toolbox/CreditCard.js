import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import { useForm } from "react-hook-form";
import "react-credit-cards/es/styles-compiled.css";
import {
  Badge,
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Label,
  Row,
} from "reactstrap";

export default function CreditCard() {
  const { register, handleSubmit, errors } = useForm();
  const [card, setCard] = useState();
  const [showCard, setShowCard] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const onSubmit = (data) => {
    setCard({ number: number, name: name, date: date, cvc: cvc });
    setShowCard(true);
  };
  useEffect(() => {
    console.log(card);
  }, [card]);
  return (
    <div>
      <h1 className="p-3 m-3 bg-primary text-white themed-container shadow rounded-pill text-center">
        Credit Card Payment
      </h1>
      {showCard && (
        <div>
          <Row className="p-3 mb-2 ml-5">
            <Col sm="4">
              <Card body className="p-0 m-4 rounded bg-info text-white">
                <CardTitle tag="h5" className="p-1 ml-5">
                  Credit Card Payment
                </CardTitle>
                <CardText className="p-1 ml-5">Name : {name}</CardText>
                <CardText className="p-1 ml-5">Card Number : {number}</CardText>
                <CardText className="p-1 ml-5">Date : {date}</CardText>
                <CardText className="p-1 ml-5">CVC : {cvc}</CardText>
                <h3 className="p-1 ml-5">
                  <Badge color="success">550$ Payment Succesfully</Badge>
                </h3>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      <hr />
      <Row className="themed-container border rounded-pill p-5 m-5">
        <Col xs={5} className="m-0 p-0">
          <Cards
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus}
          />
        </Col>
        <Col xs={1} className="m-0 p-0"></Col>
        <Col xs={5} className="m-0 p-0">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="p-0 m-0">
              <input
                className="form-control m-1 p-2"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                ref={register({ required: "This field can not be empty!!!" })}
              />
              {errors.name && <FormText>{errors.name.message}</FormText>}
            </Row>
            <Row className="p-0 m-0">
              <input
                className="form-control m-1 p-2"
                type="number"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                ref={register({
                  required: "This field can not be empty!!!",
                  minLength: {
                    value: 16,
                    message: "Password must be at least 16 characters!!!",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must be maximum of 16 characters!!!",
                  },
                })}
              />
              {errors.number && <FormText>{errors.number.message}</FormText>}
            </Row>
            <Row className="p-0 m-0">
              <Col xs={7} className="m-0 p-0">
                <input
                  className="form-control m-1 p-2"
                  type="text"
                  name="date"
                  placeholder="MM/YY"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  ref={register({
                    required: "This field can not be empty!!!",
                    minLength: {
                      value: 4,
                      message: "Password must be at least 4 characters!!!",
                    },
                    maxLength: {
                      value: 4,
                      message: "Password must be maximum of 4 characters!!!",
                    },
                  })}
                />
                {errors.date && <FormText>{errors.date.message}</FormText>}
              </Col>
              <Col xs={1} className="m-0 p-0" />
              <Col xs={3} className="m-0 p-0">
                <input
                  className="form-control m-1 p-2"
                  type="password"
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  ref={register({
                    minLength: {
                      value: 3,
                      message: "Password must be at least 3 characters!!!",
                    },
                    maxLength: {
                      value: 3,
                      message: "Password must be maximum of 3 characters!!!",
                    },
                  })}
                />
                {errors.cvc && <FormText>{errors.cvc.message}</FormText>}
              </Col>
            </Row>
            <FormGroup check>
              <Label check>
                <Row for="ConditionsCheckbox">
                  <CustomInput
                    type="switch"
                    id="ConditionsCustomSwitch"
                    required
                  />
                  <h6>
                    I agree to <a href="/">Conditions of Use</a> and{" "}
                    <a href="/">Privacy Notice</a>.
                  </h6>
                </Row>
              </Label>
            </FormGroup>
            <hr />
            <Row className="p-0 m-0">
              <Col xs={3} className="m-0 p-0">
                <Button color="success" size="lg" disabled>
                  550$
                </Button>
              </Col>
              <Col xs={6} className="m-0 p-0" />
              <Col xs={3} className="m-0 p-0">
                <Button color="danger" size="lg">
                  Pay Now
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
/*
import MaskInput from "react-maskinput";
<div>
      <MaskInput
        alwaysShowMask
        mask="0000-0000-0000-0000"
        size={20}
        maskChar="_"
      />
      <MaskInput alwaysShowMask mask="00/00" size={20} showMask maskChar="_" />
      <MaskInput
        alwaysShowMask
        mask={"+1 (000) 000 - 0000"}
        size={20}
        maskChar="_"
      />

      <form action="">
        <div>
          <label for="cc">Expiration Date</label>
          <input
            id="cc"
            type="text"
            placeholder="MM/YY"
            class="masked"
            pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
            data-valid-example="05/18"
          />
        </div>

        <div>
          <label for="czc">Canadian Zip Code</label>
          <input
            id="czc"
            placeholder="XXX XXX"
            pattern="\w\d\w \d\w\d"
            class="masked"
            data-charset="_X_ X_X"
            id="zipca"
            type="text"
            name="zipcodeca"
            title="6-character alphanumeric zip code in the format of A1A 1A1"
          />
        </div>
      </form>
    </div>
          <input
          className="form-control m-1 p-2"
          type="number"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          ref={register({
            required: "This field can not be empty!!!",
            minLength: {
              value: 16,
              message: "Password must be at least 16 characters!!!",
            },
            maxLength: {
              value: 16,
              message: "Password must be maximum of 16 characters!!!",
            }, 
               placeholder="Card Number"
          pattern="\w\d\w \d\w\d"
          className="form-control m-1 p-2 masked"
          data-charset="_X_ X_X"
          type="text"

          alwaysShowMask
          mask="0000-0000-0000-0000"
          size={20}
          maskChar="_"
          maxlength="16"
          })}
      />
      */
