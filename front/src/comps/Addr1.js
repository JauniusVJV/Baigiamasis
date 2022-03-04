import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const Addr1 = ({ item, addIndicator, setIndicator }) => {
  const nav = useNavigate();
  let [selected, setSelected] = useState(false);
  const { setToEdit } = useContext(MainContext);

  function Delete() {
    fetch("http://localhost:4000/deladdress/" + item._id)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIndicator(addIndicator + 1);
        }
      });
  }

  function Select() {
    setToEdit({
      objName: "Address",
      selectedObject: item,
    });
    nav("/edit/");
  }

  function mouseOver() {
    setSelected(true);
  }
  function mouseOut() {
    setSelected(false);
  }

  return (
    <div className="org backwhite" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <div className={`org address ${selected ? "selected" : ""}`} onClick={Select}>
        <p>{item.street + " " + item.number + "  -  " + item.flatNumber} </p>
        <p> {item.city + ", " + item.country} </p>
      </div>

      <button type="delete" onClick={Delete}>
        X
      </button>
    </div>
  );
};

export default Addr1;
