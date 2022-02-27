import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const LoginForm = () => {
  const { setUser, user } = useContext(MainContext);
  const nav = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

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
      setUser(data);
      console.log("Ar parėjo useris į state ?: " + user);
      nav("/dash");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex column form">
      <input type="text" ref={userNameRef} placeholder=" user name" />
      <input type="text" ref={passwordRef} placeholder=" password" />
      <button onClick={login}>Login</button>
      <p className="data_error">{error}</p>
    </div>
  );
};

export default LoginForm;
