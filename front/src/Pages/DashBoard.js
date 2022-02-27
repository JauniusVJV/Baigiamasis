import { useEffect, useContext } from "react";
import MainContext from "../context/MainContext";

const DashBoard = () => {
  const { setActivePage, activePage } = useContext(MainContext);

  useEffect(() => {
    setActivePage("dashBoard");
  }, []);

  console.log("dashBoard setActivePage activePage: ", activePage);
  return <div className="d-flex j-center pageBackground">DashBoard</div>;
};

export default DashBoard;
