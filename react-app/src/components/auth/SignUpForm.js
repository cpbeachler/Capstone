import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../CSS/SignUpForm.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(signUp(username, email, password, location));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}
      className='signup'
      id='form'>
      <h1>Sign up</h1>
      <div>
        <label>User Name: </label>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label> Zip Code: </label>
        <input
          type="text"
          placeholder="Zip Code"
          name="location"
          onChange={updateLocation}
          value={location}
        ></input>
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password: </label>
        <input
          type="password"
          name="repeat_password"
          placeholder="Confirm Password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className="formButton" type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
