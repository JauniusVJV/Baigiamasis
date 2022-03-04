import { useEffect, useContext } from "react";
import LoginForm from "../comps/LoginForm";
import MainContext from "../context/MainContext";

const AddWaterMeter = () => {
  const { setActivePage, activePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("addWaterMeter");
  }, []);

  return (
    <div className="d-flex j-center loginRegisterPage">
      <LoginForm />
    </div>
  );
};

export default AddWaterMeter;
