import React, { useState } from "react";
import "../components/RegistrationFrom.css"; // Importing the CSS file

export default function App() {

  const [field, setField] = useState({
    firstName:"",
    email:"",
    Password:"",
    RepeatPassword:""
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={(e)=>{e.preventDefault();
        if(field.firstName && field.email && field.Password && field.RepeatPassword)setValidation(true);
        setSubmit(true)}}>

        {submitted && validate?<div className="success-message">Registration succesfull!</div>:null}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e)=>{setField({...field, firstName:e.target.value})}}
        />

        {submitted && !field.firstName ?<span>Please enter your first name</span>:null}
      
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="email"
          name="email"
          value={field.email}
          onChange={(e)=>{setField({...field, email:e.target.value})}}
        />

        {submitted && !field.email ?<span>Please enter your email</span>:null}
       
        <input
          id="Password"
          className="form-field"
          type="text"
          placeholder="Password"
          name="Password"
          value={field.Password}
          onChange={(e)=>{setField({...field, Password:e.target.value})}}
        />

        {submitted && !field.Password ?<span>Please enter your Password</span>:null}

        <input
          id="RepeatPassword"
          className="form-field"
          type="text"
          placeholder="RepeatPassword"
          name="RepeatPassword"
          value={field.RepeatPassword}
          onChange={(e)=>{setField({...field, RepeatPassword:e.target.value})}}
        />

        {submitted && !field.RepeatPassword ?<span>RepeatPassword</span>:null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
