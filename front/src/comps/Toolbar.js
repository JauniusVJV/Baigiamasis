import { Link } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../images/logo2.png";
import MainContext from "../context/MainContext";

const Toolbar = () => {
  const { LoggedIn, ActivePage } = useContext(MainContext);
  return (
    <div className="toolbar">
      <div className="logo_container">
        <img className="logo" src={logo} alt="Logo" />
        <p className="logo_text">Wawe</p>
      </div>
      <div className="links">
        {!(ActivePage === "login" || LoggedIn) && (
          <div>
            <Link className="link" to="/login">
              Login
            </Link>
            |
          </div>
        )}
        {console.log("ActivePage: ", ActivePage, " LoggedIn: ", LoggedIn)}
        <Link className="link" to="/register">
          Register
        </Link>
        |
        <Link className="link" to="/register">
          About
        </Link>
        {/* <Link to="/create">Create Product</Link> */}
        {/* <Link to="/cart">Cart ({getCart.length})</Link> */}
      </div>
    </div>
  );
};

export default Toolbar;
