import { useEffect, useContext } from "react";
import RegisterUserForm from "../comps/RegisterUserForm";
import MainContext from "../context/MainContext";

const RegisterUserPage = () => {
  const { setActivePage, activePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("register");
  }, []);

  return (
    <div className="d-flex j-center pageBackground">
      <RegisterUserForm />
    </div>
  );
};

export default RegisterUserPage;
