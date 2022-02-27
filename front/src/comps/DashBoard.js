import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "./context/MainContext";

const DashBoard = () => {
  let { loggedIn, activePage, user } = useContext(MainContext);
  const nav = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  function checkLogin() {}
  async function login() {
    const user = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("http://localhost:4000/login", options);
    const data = await res.json();

    // console.log(data);

    if (data.success) {
      localStorage.setItem("secret", data.secret);
      localStorage.setItem("name", data.userName);
      nav("/dash");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex ">
      Dashboard component
      {/* <input type="text" ref={userNameRef} placeholder=" user name" /> */}
      {/* <input type="text" ref={passwordRef} placeholder=" password" /> */}
      {/* <button onClick={}>Login</button> */}
      <p className="data_error">{error}</p>
    </div>
  );
};

export default DashBoard;
