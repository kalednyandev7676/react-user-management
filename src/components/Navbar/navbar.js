import React, { useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar-elements";
import logo from "../../logo.svg";
import { AuthContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLogin = localStorage.getItem("isLoggedIn");

  const logOut = (event) => {
    event.preventDefault();
    authCtx.onLogout();
    navigate("/login");
  };

  return (
    <>
      <Nav>
        <img src={logo} alt="logo" />
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/blogs">Blogs </NavLink>
          <NavLink to="/udemy">Udemy</NavLink>
          <NavLink to="/team">Teams</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
        {!isLogin && (
          <NavBtn>
            <NavBtnLink to="/Login">Sign In</NavBtnLink>
          </NavBtn>
        )}
        {isLogin && (
          <NavBtn>
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
