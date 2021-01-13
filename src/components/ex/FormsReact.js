import React from "react";
import { Link } from "react-router-dom";
import {Badge,Button,Form,InputGroup,InputGroupAddon,InputGroupText,FormGroup,Label,Col,FormText,Row} from "reactstrap";
import { FcKey } from "react-icons/fc";
import { useForm } from "react-hook-form";

export default function FormsReact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
<div>
    <Link to=""><Badge color="warning">Go to HomePage</Badge></Link>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col sm={2}><Label for="idEmail" sm={2}>Email</Label></Col>
          <Col sm={6}><InputGroup>
              <InputGroupAddon addonType="prepend"><InputGroupText>@</InputGroupText></InputGroupAddon>
              <input autoFocus type="email" name="nameEmail" id="idEmail" placeholder="Write own e-mail address" ref={register({ required: true })}/>
              {errors.nameEmail && (<FormText>This field can not be empty!!!</FormText>)}
          </InputGroup></Col>
          <Col sm={2}><Button color="link" outline className="m-0 p-0">
              <h4 className="m-0 p-0"><Badge color="info" pill className="m-1 p-1">Check me out</Badge></h4>
          </Button></Col>
        </Row> <br/>
        <Row form>
            <Col sm={2}><Label for="idPassword" sm={2}>Password</Label></Col>
            <Col sm={9}>
            <InputGroup>
               <InputGroupAddon addonType="prepend"><InputGroupText><FcKey/></InputGroupText></InputGroupAddon>
                 <input type="password"  name="namePassword" id="idPassword" placeholder="Don't tell anyone your password!!!"
                    ref={register({required: "PASSWORD REQUİRED", minLength: { value: 8, message: "TOO SHORT" }, maxLength: { value: 12, message: "TOO LONG" }})}/>
             </InputGroup>
            {errors.namePassword && (<FormText>This field can not be empty!!!</FormText>)}
            </Col>
        </Row>
        <FormGroup><Col col sm={10}><hr/><input type="submit" color="primary"/></Col></FormGroup>
    </Form>
    </div>
  );
}
/*
<FormGroup className="position-relative">
<Label for="exampleEmail">Valid input</Label>
<Input valid />
<FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
<FormText>Example help text that remains unchanged.</FormText>
</FormGroup>
<FormGroup className="position-relative">
<Label for="examplePassword">Invalid input</Label>
<Input invalid />
<FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
<FormText>Example help text that remains unchanged.</FormText>
</FormGroup>
*/
/*
<form onSubmit={handleSubmit(onSubmit)}>
        <input
          autoFocus
          type="email"
          name="mailRequired"
          placeholder="e-mail"
          ref={register({ required: true })}
          // ref={register}
          // defaultValue="test"
        />
        {/* <input
        name="passwordRequired"
        placeholder="password"
        ref={register({ required: true })}
      />
        {errors.mailRequired && <span>This field is required</span>}
         {errors.passwordRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>

*/

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Input } from "reactstrap";

// const MyInput = ({ name, label, register }) => {
//   return (
//     <>
//       <label htmlFor={name}>{label}</label>
//       <input name={name} placeholder="Jane" ref={register} />
//     </>
//   );
// };

// export default function FormsReact() {
//   const { register, handleSubmit, setValue } = useForm();
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data, null));
//   };
//   const [values, setReactSelect] = useState({
//     selectedOption: [],
//   });

//   const handleMultiChange = (selectedOption) => {
//     setValue("reactSelect", selectedOption);
//     setReactSelect({ selectedOption });
//   };

//   const hanleChange = (e) => {
//     setValue("antDInput", e.target.value);
//   };

//   useEffect(() => {
//     register({ name: "reactSelect" });
//     register({ name: "antDInput" });
//   }, [register]);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <MyInput name="firstName" label="First Name" register={register} />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input name="lastName" placeholder="Luo" ref={register} />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             name="email"
//             placeholder="bluebill1049@hotmail.com"
//             type="email"
//             ref={register}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

/////////////////////////////////////
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function FormsReact() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
//       <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
//       <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }
/////////////////////////////////////

// import React from "react";
// import { Link } from "react-router-dom";
// import { Col, Form, FormGroup, Label, Input, Button, Badge } from "reactstrap";
// import { useForm } from "react-hook-form";

// export default function FormsReact() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => alert(JSON.stringify(data));
//   return (
//     <div>
//       <Link to="">
//         <Badge color="warning">Go to HomePage</Badge>
//       </Link>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <input name="firstName" ref={register} placeholder="First name" />
//         <input name="lastName" ref={register} placeholder="Last name" />
//         <select name="category" ref={register}>
//           <option value="">Select...</option>
//           <option value="A">Category A</option>
//           <option value="B">Category B</option>
//         </select>
//         {/* <Input type="submit" /> */}
//         <Button type="submit">Login</Button>
//       </Form>
//     </div>
//   );
// }
