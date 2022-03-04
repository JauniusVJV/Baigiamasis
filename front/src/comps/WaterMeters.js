import { useRef, useState, useContext, useEffect } from "react";
import MainContext from "../context/MainContext";
import Meter from "../comps/Meter";

const WaterMeters = () => {
  const { user } = useContext(MainContext);
  const waterMeterNumberRef = useRef();
  const waterOtherInfoRef = useRef();
  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);
  let [addWmeterIndicator, setaddWmeterIndicator] = useState(0);
  const [getWmeters, setWmeters] = useState([]);

  useEffect(() => {
    showWaterMeters();
  }, [addWmeterIndicator]);

  //  ------------------ ADD
  async function addWaterMeter() {
    const wmeter = {
      wmNumber: waterMeterNumberRef.current.value,
      otherInfo: waterOtherInfoRef.current.value,
      userID: user._id,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wmeter),
    };

    const res = await fetch("http://localhost:4000/addwmeter", options);
    const data = await res.json();

    if (data.success) {
      setSuccessRegistration(true);
      setaddWmeterIndicator(addWmeterIndicator + 1);
      setError("");
    } else {
      setSuccessRegistration(false);
      setError(data.message);
    }
  } //  ------------------ ADD. End.

  // ------------------- SHOW
  function showWaterMeters() {
    fetch("http://localhost:4000/getwmeters/" + user._id)
      .then((res) => res.json())
      .then((data) => {
        setWmeters(data);
      });
  } // ------------------- SHOW. End.

  return (
    <div className="d-flex wrap backwhite">
      Water meters:
      <div className="meters">
        {getWmeters.map((x, i) => (
          <Meter
            key={i}
            item={x}
            addIndicator={addWmeterIndicator}
            setIndicator={setaddWmeterIndicator}
          />
        ))}
      </div>
      Add Water meter:
      <input type="text" ref={waterMeterNumberRef} placeholder=" water meter number" />
      <input type="text" ref={waterOtherInfoRef} placeholder=" hot/cold, location info" />
      <button onClick={addWaterMeter}>Add water meter</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default WaterMeters;
