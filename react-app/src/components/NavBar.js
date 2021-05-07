import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { showModal, setCurrentModal } from '../store/modal';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignUpForm';
import LogoutButton from './auth/LogoutButton';
import './CSS/Navbar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const showLogin = () => {
    dispatch(setCurrentModal(LoginForm));
    dispatch(showModal());
  };
  const showSignup = () => {
    dispatch(setCurrentModal(SignupForm));
    dispatch(showModal());
  };
  return (
    <nav>
      <div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
        <button onClick={showLogin}>
            Log In
        </button>
        </div>
        <div>
        <button onClick={showSignup}>
            Sign Up
        </button>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
