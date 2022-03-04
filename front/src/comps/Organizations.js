import { useRef, useState, useContext, useEffect } from "react";
import MainContext from "../context/MainContext";
import Org1 from "../comps/Org1";

const Organizations = () => {
  const { user } = useContext(MainContext);
  const orgTitleRef = useRef();
  const orgCodeRef = useRef();
  const orgVATcodeRef = useRef();

  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);

  let [addIndicator, setaddIndicator] = useState(0);
  const [getOrganizations, setgetOrganizations] = useState([]);

  useEffect(() => {
    showOrganizations();
  }, [addIndicator]);

  //  ------------------ ADD
  async function addOrganization() {
    const org = {
      orgTitle: orgTitleRef.current.value,
      code: orgCodeRef.current.value,
      codeVAT: orgVATcodeRef.current.value,
      userID: user._id,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(org),
    };

    const res = await fetch("http://localhost:4000/addorganization", options);
    const data = await res.json();

    if (data.success) {
      setSuccessRegistration(true);
      setaddIndicator(addIndicator + 1);
      setError("");
    } else {
      setSuccessRegistration(false);
      setError(data.message);
    }
  } //  ------------------ ADD. End.

  // ------------------- SHOW
  function showOrganizations() {
    fetch("http://localhost:4000/getorg/" + user._id)
      .then((res) => res.json())
      .then((data) => {
        setgetOrganizations(data);
      });
  } // ------------------- SHOW. End.

  return (
    <div className="d-flex wrap backwhite">
      Organizations:
      <div className="orgs">
        {getOrganizations.map((x, i) => (
          <Org1 key={i} item={x} addIndicator={addIndicator} setIndicator={setaddIndicator} />
        ))}
      </div>
      Add Organization:
      <input type="text" ref={orgTitleRef} placeholder=" organization title" />
      <input type="text" ref={orgCodeRef} placeholder=" organization code number" />
      <input type="text" ref={orgVATcodeRef} placeholder=" organization VAT code" />
      <button onClick={addOrganization}>Add Organization</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default Organizations;
