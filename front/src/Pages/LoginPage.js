import { useEffect, useContext } from "react";
import CreatePorductForm from "../comps/CreatePorductForm";
import LoginForm from "../comps/LoginForm";
import MainContext from "../context/MainContext";

const LoginPage = () => {
  const { setActivePage, activePage } = useContext(MainContext);
  setActivePage("login");
  console.log("LoginPage setActivePage activePage: ", activePage);
  return (
    <div className="d-flex j-center loginRegisterPage">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
