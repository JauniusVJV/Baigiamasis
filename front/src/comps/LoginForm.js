import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const LoginForm = () => {
  const { setUser, setLoggedIn } = useContext(MainContext);
  const nav = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  async function login() {
    const userL = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userL),
    };

    const res = await fetch("http://localhost:4000/login", options);
    const data = await res.json();

    if (data.success) {
      localStorage.setItem("secret", data.secret);
      localStorage.setItem("name", data.userName);
      localStorage.setItem("user", data.user);
      setUser(data.user);
      setLoggedIn(true);
      nav("/board");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="login d-flex column form ">
      <input type="text" ref={userNameRef} placeholder=" user name" />
      <input type="text" ref={passwordRef} placeholder=" password" />
      <button onClick={login}>Login</button>
      <p className="data_error">{error}</p>
    </div>
  );
};

export default LoginForm;
