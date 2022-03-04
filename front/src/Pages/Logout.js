import { useContext, useEffect } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setLoggedIn, setUser } = useContext(MainContext);
  const nav = useNavigate();

  useEffect(() => {
    out();
  }, []);

  function out() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("secret");
    localStorage.removeItem("name");
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
    nav("/");
  }

  return <div></div>;
};

export default Logout;
