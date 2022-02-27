import { useEffect, useContext } from "react";
import LoginForm from "../comps/LoginForm";
import MainContext from "../context/MainContext";

const About = () => {
  const { setActivePage, activePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("about");
  }, []);

  console.log("addWaterMeter activePage: ", activePage);
  return (
    <div className="d-flex j-center pageBackground">
      <h2 className="p-20"> Wave </h2>
      <h3 className="p-20 t-130">
        app are designed to help public and private organizations and their users provide and
        collect data on water consumption in rooms or apartments.{" "}
      </h3>
    </div>
  );
};

export default About;
