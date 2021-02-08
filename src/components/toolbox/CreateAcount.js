import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  FormFeedback,
  CustomInput,
} from "reactstrap";
import { FcKey } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { checkMail, checkUserData } from "../../redux/actions/userActions";

export default function FormsReact() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState({
    isEmailValidation: false,
    emailClassName: "form-control", // form-control is-invalid
    isPasswordValidation: false,
    passwordClassName: "form-control", // form-control is-invalid
  });
  const [inputMailData, setInputMailData] = useState(null);
  const checkMailAvailable = () => {
    dispatch(checkMail(inputMailData));
  };
  const onSubmit = (data) => {
    dispatch(checkUserData(data));
  };
  return (
    <div>
      <Link to="">
        <Badge color="warning">Go to HomePage</Badge>
      </Link>
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
                className={validation.emailClassName}
                type="email"
                name="nameEmail"
                id="idEmail"
                placeholder="Write own e-mail address"
                ref={register({ required: "This field can not be empty!!!" })}
                onChange={(e) => {setInputMailData(e.target.value)}}
              />
              <div class="invalid-feedback">This email used before!!!</div>
              <div class="valid-feedback">This email is available...</div>
              <FormFeedback valid tooltip>
                Sweet! That email is available
              </FormFeedback>
              <FormFeedback tooltip>
                Oh no! That name is already taken
              </FormFeedback>
            </InputGroup>
            {errors.nameEmail && (
              <FormText>{errors.nameEmail.message}</FormText>
            )}
          </Col>
          <Col sm={2}>
            <Button
              color="link"
              outline
              className="m-0 p-0"
              onClick={checkMailAvailable}
            >
              <h4 className="m-0 p-0">
                <Badge color="info" pill className="m-1 p-1">
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
                className={validation.passwordClassName}
                type="password"
                name="namePassword"
                id="idPassword"
                placeholder="Don't tell anyone your password!!!"
                ref={register({
                  required: "This field can not be empty!!!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 8 characters!!!",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be maximum of 12 characters!!!",
                  },
                })}
              />
              <div class="invalid-feedback">Password is wrong!!!</div>
              <div class="valid-feedback">Password is correct</div>
              <FormFeedback valid tooltip>
                Password is correct
              </FormFeedback>
              <FormFeedback tooltip>Password is wrong!!!</FormFeedback>
            </InputGroup>
            {errors.namePassword && (
              <FormText>{errors.namePassword.message}</FormText>
            )}
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
      <Link to="createAcount">
        <Badge color="success">Create new acount</Badge>
      </Link>
    </div>
  );
}
/*
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "reactstrap";

const MyInput = ({ name, label, register }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} placeholder="Jane" ref={register} />
    </>
  );
};

export default function FormsReact() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null));
  };
  const [values, setReactSelect] = useState({
    selectedOption: [],
  });

  const handleMultiChange = (selectedOption) => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  };

  const hanleChange = (e) => {
    setValue("antDInput", e.target.value);
  };

  useEffect(() => {
    register({ name: "reactSelect" });
    register({ name: "antDInput" });
  }, [register]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <MyInput name="firstName" label="First Name" register={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="Luo" ref={register} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="bluebill1049@hotmail.com"
            type="email"
            ref={register}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


import React, { useEffect, useState } from "react";

export default function NotFound() {
  const [textInput, setTextInput] = useState(null);

  const focusTextInput = () => {
    console.log(textInput);
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={(event) => {
          setTextInput({email: event.target.value });
        }}
      />
      <button
        onClick={focusTextInput}
      />
    </div>
  );
}


class User extends Component {
  constructor(props) {
    super();
    this.nameField = React.createRef();
    this.onClick = this.focusOnNameField.bind(this);
    this.state = {
      name: props.name,
    };
  }
  focusOnNameField = () => {
    this.nameField.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.nameField} name="username" value={this.state.name} />
        <button onClick={this.onClick}>Fous on field</button>
      </div>
    );
  }
}
*/
