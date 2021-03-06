import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { clearHave } from "../../store/haveCards";
import { clearWant } from "../../store/wantCards"
import '../CSS/Navbar.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(clearHave());
    await dispatch(clearWant());
    await dispatch(logout());
  };

  return <button className='navButton' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
