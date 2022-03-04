import React from "react";

const Meter = ({ item, addIndicator, setIndicator }) => {
  function Delete() {
    fetch("http://localhost:4000/delwmeter/" + item._id)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIndicator(addIndicator + 1);
        }
      });
  }

  return (
    <div className="meter">
      <h4>{item.wmNumber} </h4>
      <p> {item.otherInfo} </p>
      <button type="delete" onClick={Delete}>
        X
      </button>
    </div>
  );
};

export default Meter;
