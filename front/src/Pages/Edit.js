import { useEffect, useContext } from "react";
import MainContext from "../context/MainContext";
import EditOrg from "../comps/EditOrg";
import EditAddr from "../comps/EditAddr";

const Edit = () => {
  const { setActivePage, user, toEdit } = useContext(MainContext);

  useEffect(() => {
    setActivePage("edit");
  }, []);

  return (
    <div className="d-flex j-center pageBackground dash">
      <h3 className="dash_user"> User: {user.userName} </h3>
      <div className="comps_container j-center">
        {toEdit.objName === "Org" && (
          <div className="component">
            <EditOrg />
          </div>
        )}
        {toEdit.objName === "Address" && (
          <div className="component">
            <EditAddr />
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
