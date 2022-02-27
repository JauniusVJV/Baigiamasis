import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddWaterMeter = () => {
  const nav = useNavigate();
  const waterMeterNumberRef = useRef();
  const waterOtherInfoRef = useRef();

  const [error, setError] = useState(null);

  async function addWaterMeter() {
    const product = {
      waterMeterNumberRef: waterMeterNumberRef.current.value,
      waterOtherInfoRef: waterOtherInfoRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    };

    const res = await fetch("http://localhost:4000/create", options);
    const data = await res.json();

    console.log(data);

    if (data.success) {
      nav("/");
    } else {
      setError(data.message);
    }
  }

  function addWaterMeters() {}

  return (
    <div className="d-flex column form">
      Add Water meter:
      <input type="text" ref={waterMeterNumberRef} placeholder=" water meter number" />
      <input type="text" ref={waterOtherInfoRef} placeholder=" any other info" />
      <button onClick={addWaterMeter}>Add water meter</button>
      <h3>{error}</h3>
    </div>
  );
};

export default AddWaterMeter;
