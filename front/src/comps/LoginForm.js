import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  async function create() {
    const product = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
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

  function loginUser() {}

  return (
    <div className="d-flex column form">
      <input type="text" ref={userNameRef} placeholder=" user name" />
      <input type="text" ref={passwordRef} placeholder=" password" />
      <button onClick={loginUser}>Login</button>
      <h3>{error}</h3>
    </div>
  );
};

export default LoginForm;
