import { useEffect, useContext } from "react";
import LoginForm from "../comps/LoginForm";
import MainContext from "../context/MainContext";

const MainPage1 = () => {
  const { setActivePage, activePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("login");
  }, []);

  console.log("MainPage1 setActivePage activePage: ", activePage);
  return (
    <div className="d-flex j-center pageBackground">
      <LoginForm />
    </div>
  );
};

export default MainPage1;
