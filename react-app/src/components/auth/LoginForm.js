import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import '../CSS/LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const demoLogin = async (e) =>{
    e.preventDefault()
    const data = await dispatch(login('demo@aa.io','password'))
    if (data.errors){
      setErrors(data.errors)
    }
  }

  return (
    <form onSubmit={onLogin}
      className='login'>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <h1>Login </h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div>
        <button className="formButton" onClick={demoLogin}>Demo</button>
        <button className="formButton" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
