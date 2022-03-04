import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const EditOrg = () => {
  const { toEdit } = useContext(MainContext);
  const nav = useNavigate();
  const orgTitleRef = useRef();
  const orgCodeRef = useRef();
  const orgVATcodeRef = useRef();

  const [oldValue, setOldValue] = useState({
    orgTitle: toEdit.selectedObject.orgTitle,
    code: toEdit.selectedObject.code,
    codeVAT: toEdit.selectedObject.codeVAT,
    _id: toEdit.selectedObject._id,
  });

  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);

  let [addIndicator, setaddIndicator] = useState(0);

  //  ------------------ UPDATE
  async function updateOrganization() {
    const org = {
      orgTitle: orgTitleRef.current.value,
      code: orgCodeRef.current.value,
      codeVAT: orgVATcodeRef.current.value,
      _id: oldValue._id,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(org),
    };

    const res = await fetch("http://localhost:4000/updateorganization", options);
    const data = await res.json();

    if (data.success) {
      setSuccessRegistration(true);
      setaddIndicator(addIndicator + 1);
      setError("");
      nav("/board");
    } else {
      setSuccessRegistration(false);
      setError(data.message);
    }
  } //  ------------------ UPDATE. End.

  return (
    <div className="d-flex wrap backwhite">
      Edit selected Organization:
      <input
        type="text"
        ref={orgTitleRef}
        defaultValue={oldValue.orgTitle}
        placeholder=" organization title"
      />
      <input
        type="text"
        ref={orgCodeRef}
        defaultValue={oldValue.code}
        placeholder=" organization code number"
      />
      <input
        type="text"
        ref={orgVATcodeRef}
        defaultValue={oldValue.codeVAT}
        placeholder=" organization VAT code"
      />
      <button onClick={updateOrganization}>Update</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default EditOrg;
