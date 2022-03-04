import { Link } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../images/logo2.png";
import MainContext from "../context/MainContext";
// import { useNavigate } from "react-router-dom";

const Toolbar = () => {
  const { loggedIn, activePage } = useContext(MainContext);
  // const nav = useNavigate();

  return (
    <div className="toolbar">
      <div className="logo_container">
        <img className="logo" src={logo} alt="Logo" />
        <p className="logo_text">Wawe</p>
      </div>
      <div className="links">
        {/* LOGIN */}
        {!loggedIn && !(activePage === "login") && (
          <div>
            <Link className="link" to="/">
              Login
            </Link>
          </div>
        )}
        {/* REGISTER (Add new user) */}
        {!(activePage === "register") && (
          <div>
            <Link className="link" to="/registeruser">
              Register
            </Link>
          </div>
        )}

        {/* Board */}
        {loggedIn && !(activePage === "board") && (
          <div>
            <Link className="link" to="/board">
              Dashboard
            </Link>
          </div>
        )}

        {/* Logout */}
        {loggedIn && !(activePage === "logout") && (
          <div>
            <Link className="link" to="/logout">
              Logout
            </Link>
          </div>
        )}

        {/* About */}
        {!(activePage === "about") && (
          <div>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
