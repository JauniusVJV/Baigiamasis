import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const EditAddr = () => {
  const { toEdit } = useContext(MainContext);
  const nav = useNavigate();

  const streetRef = useRef();
  const numberRef = useRef();
  const flatNumberRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();

  const [oldValue, setOldValue] = useState({
    street: toEdit.selectedObject.street,
    number: toEdit.selectedObject.number,
    flatNumber: toEdit.selectedObject.flatNumber,
    city: toEdit.selectedObject.city,
    country: toEdit.selectedObject.country,
    _id: toEdit.selectedObject._id,
  });

  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [addIndicator, setaddIndicator] = useState(0);

  //  ------------------ UPDATE
  async function updateAddress() {
    const address = {
      street: streetRef.current.value,
      number: numberRef.current.value,
      flatNumber: flatNumberRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      _id: oldValue._id,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(address),
    };
    const res = await fetch("http://localhost:4000/updateaddress", options);
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
      Edit selected Address:
      <input type="text" ref={streetRef} defaultValue={oldValue.street} placeholder=" Street" />
      <input
        type="text"
        ref={numberRef}
        defaultValue={oldValue.number}
        placeholder=" House number"
      />
      <input
        type="text"
        ref={flatNumberRef}
        defaultValue={oldValue.flatNumber}
        placeholder=" #Apartment/ office/ flat"
      />
      <input type="text" ref={cityRef} defaultValue={oldValue.city} placeholder=" City" />
      <input type="text" ref={countryRef} defaultValue={oldValue.country} placeholder=" Country" />
      <button onClick={updateAddress}>Update</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default EditAddr;
