import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Badge,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Col,
  FormText,
  Row,
  CustomInput,
} from "reactstrap";
import { FcKey } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { checkMail, checkUserData } from "../../redux/actions/userActions";

export default function CreateAccount() {
  const [nameEmail, setNameEmail] = useState("")

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    // e.preventDefault();
    dispatch(checkUserData(e));
  };
  const checkMailAvailable = () => {console.log(nameEmail.current.value)};
  // const checkMailAvailable = (e) => {
  //   e.preventDefault();
  //   dispatch(checkMail(e));
  //   console.log(e.target.value)
  //   console.log(nameEmail)
  // };


  return (
    <div>
           <Form onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col xs={2}>
            <Label for="idEmail" sm={2}>
              Email
            </Label>
          </Col>
          <Col xs={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <input
                autoFocus
                className="form-control"
                type="email"
                name="nameEmail"
                id="idEmail"
                placeholder="Write own e-mail address"
                ref={
                  ((mailCheck) => setNameEmail(mailCheck),
                  register({ required: "This field can not be empty!!!" }))
                }
              />
            </InputGroup>
                    </Col>
          <Col sm={2}>
            <Button color="link" outline className="m-0 p-0">
              <h4 className="m-0 p-0">
                <Badge
                  color="info"
                  pill
                  className="m-1 p-1"
                  onClick={checkMailAvailable}
                >
                  Check me out
                </Badge>
              </h4>
            </Button>
          </Col>
        </Row>{" "}
        <br />
        <Row form>
          <Col sm={2}>
            <Label for="idPassword" sm={2}>
              Password
            </Label>
          </Col>
          <Col sm={9}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FcKey />
                </InputGroupText>
              </InputGroupAddon>
              <input
                className="form-control"
                type="passw={ord"
                name="namePassword"
                id="idPassword"
                placeholder="Don't tell anyone your password!!!"
                ref={register({
                  required: "This field can not be empty!!!",
                           })}
              />
            </InputGroup>
           
          </Col>
        </Row>
        <FormGroup>
          <Col col sm={10}>
            <br />
            <FormGroup check>
              <Label check>
                <Row for="ConditionsCheckbox">
                  <CustomInput
                    type="switch"
                    id="ConditionsCustomSwitch"
                    required
                  />{" "}
                  <h6>
                    I agree to <a href="/">Conditions of Use</a> and{" "}
                    <a href="/">Privacy Notice</a>.
                  </h6>
                </Row>
              </Label>
            </FormGroup>{" "}
            <hr />
            <Button color="primary">Sign In</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
