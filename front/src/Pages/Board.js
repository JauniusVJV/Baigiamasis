import { useEffect, useContext } from "react";
import MainContext from "../context/MainContext";
import WaterMeters from "../comps/WaterMeters";
import Organizations from "../comps/Organizations";
import Addresses from "../comps/Addresses";

const Board = () => {
  const { setActivePage, user } = useContext(MainContext);

  useEffect(() => {
    setActivePage("board");
  }, []);

  return (
    <div className="d-flex j-center pageBackground dash ">
      <h3 className="dash_user"> User: {user.userName} </h3>
      <div className="comps_container">
        <div className="component">
          <WaterMeters />
        </div>
        <div className="component">
          <Organizations />
        </div>
        <div className="component">
          <Addresses />
        </div>
      </div>
    </div>
  );
};

export default Board;
