import { useState } from "react";
import FormInput from "./Components/FormInput";

import './App.css';

function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  }); 

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 char and shouldn't include special char!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be a valid email adress!",
      label: "Email",
      required: true
    },
    {
      id:3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "password should be 8-20 char and include at least 1 letter 1 num 1 special",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id:5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput 
                    key={input.id} {...input} 
                    value={values[input.name]} 
                    handleChange={handleChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
