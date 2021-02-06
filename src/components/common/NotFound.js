import React, { useState } from "react";

export default function CreateAccount() {
  const [email, setEmail] = useState("ilk");
 
  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={handleChange}
      />
      <button type="button" disabled={!email}>
        Button
      </button>
    </div>
  );
}

class User extends Component{
  constructor(props){
      super();
      this.nameField = React.createRef();
      this.onClick = this.focusOnNameField.bind(this);
      this.state = {
          name : props.name
      };

  }
  focusOnNameField = ()=>{
      this.nameField.current.focus();
  }

  render(){
      return(
          <div>
              <input ref={this.nameField} name="username" value={this.state.name} />
              <button onClick={this.onClick} >Fous on field</button>
          </div>
      )
  }
}