import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
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

  const user = useSelector(state => state.session.user)

  return (
    <nav className='nav'>
      <div className='navContainer'>
        <div className='home'>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        {!user &&
        <div className='noUser'>
          <div className='login' id='loginButton'>
          <button className='navButton'

          onClick={showLogin}
          >
              Log In
          </button>
          </div>
          <div className='signup'>
          <button className='navButton'
          onClick={showSignup}>
              Sign Up
          </button>
          </div>
        </div>}
        {user &&
        <div>
          <LogoutButton />
        </div>}
      </div>
    </nav>
  );
}

export default NavBar;
