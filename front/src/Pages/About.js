import { useEffect, useContext } from "react";
import MainContext from "../context/MainContext";

const About = () => {
  const { setActivePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("about");
  }, []);

  return (
    <div className="d-flex pageBackground about_container">
      <div className="component about">
        <h2 className="p-20"> Wave </h2>
        <h3 className="p-20 ">
          App is currently under development - not finished. App is designed to help public and
          private organizations ( like Association of flat owners / apartment owners, Condominiums
          Association (in USA) ) and their users provide and collect data on water consumption in
          rooms, apartments and other facilities when remote data scanning is not possible.
        </h3>
      </div>
    </div>
  );
};

export default About;
