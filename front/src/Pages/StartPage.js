import { useEffect, useContext } from "react";
import LoginForm from "../comps/LoginForm";
import MainContext from "../context/MainContext";

const StartPage = () => {
  const { setActivePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("login");
  }, []);

  return (
    <div className="d-flex j-center min_page_background">
      <LoginForm />
    </div>
  );
};

export default StartPage;
