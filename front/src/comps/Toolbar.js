import { Link } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../images/logo2.png";
import MainContext from "../context/MainContext";

const Toolbar = () => {
  let { loggedIn, activePage } = useContext(MainContext);
  return (
    <div className="toolbar">
      <div className="logo_container">
        <img className="logo" src={logo} alt="Logo" />
        <p className="logo_text">Wawe</p>
      </div>
      <div className="links">
        {console.log("Toolbar comp. - ActivePage: ", activePage, " LoggedIn: ", loggedIn)}
        {/* LOGIN */}
        {!(activePage === "login" || loggedIn) && (
          <div>
            <Link className="link" to="/">
              Login
            </Link>
            |
          </div>
        )}
        {/* REGISTER (Add new user) */}
        {!(activePage === "register" || loggedIn) && (
          <div>
            <Link className="link" to="/registerUser">
              Register
            </Link>
            |
          </div>
        )}

        {/* Add Water meter */}
        {(!activePage === "addWaterMeter" || loggedIn) && (
          <div>
            <Link className="link" to="/addwatermeter">
              Add Water meter
            </Link>
            |
          </div>
        )}

        {/* Add water data */}
        {(!activePage === "addWaterData" || loggedIn) && (
          <div>
            <Link className="link" to="/adddata">
              Add Water data
            </Link>
            |
          </div>
        )}

        {/* Logout */}
        {!(activePage === "logout") && loggedIn && (
          <div>
            <Link className="link" to="/logout">
              Logout
            </Link>
            |
          </div>
        )}

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
