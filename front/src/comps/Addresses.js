import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";
import Org1 from "../comps/Org1";
import Addr1 from "./Addr1";

const Addresses = () => {
  const { user } = useContext(MainContext);
  const nav = useNavigate();
  //   const orgTitleRef = useRef();
  //   const orgCodeRef = useRef();
  //   const orgVATcodeRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const flatNumberRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();

  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  let [addIndicator, setaddIndicator] = useState(0);
  const [getAddresses, setAddresses] = useState([]);

  useEffect(() => {
    showAddresses();
  }, [addIndicator, selectedID]);

  //   useEffect(() => {
  //     selectEdit(selectedID);
  //   }, [selectedID]);

  //  ------------------ ADD
  async function addAddress() {
    const address = {
      street: streetRef.current.value,
      number: numberRef.current.value,
      flatNumber: flatNumberRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      userID: user._id,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(address),
    };

    const res = await fetch("http://localhost:4000/addaddress", options);
    const data = await res.json();

    if (data.success) {
      setSuccessRegistration(true);
      setaddIndicator(addIndicator + 1);
      setError("");
    } else {
      setSuccessRegistration(false);
      setError(data.message);
    }
  }
  //  ------------------ ADD. End.

  // ------------------- SHOW
  function showAddresses() {
    fetch("http://localhost:4000/getadresses/" + user._id)
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
      });
  }
  // ------------------- SHOW. End.

  // ------------------- Edit selected.

  //   function selectEdit(id) {
  //     if (id) {
  //       const selectedAddr = getAddresses.find((x) => {
  //         return x._id === id;
  //       });
  //     }
  //   }

  return (
    <div className="d-flex wrap backwhite">
      Addresses:
      <div className="orgs">
        {getAddresses.map((x, i) => (
          <Addr1 key={i} item={x} addIndicator={addIndicator} setIndicator={setaddIndicator} />
        ))}
      </div>
      Add Address:
      <input type="text" ref={streetRef} placeholder=" Street" />
      <input type="text" ref={numberRef} placeholder=" House number" />
      <input type="text" ref={flatNumberRef} placeholder=" #Apartment/ office/ flat" />
      <input type="text" ref={cityRef} placeholder=" City" />
      <input type="text" ref={countryRef} placeholder=" Country" />
      <button onClick={addAddress}>Add Address</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default Addresses;
