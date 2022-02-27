import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterUserForm = () => {
  const nav = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const passwordTwoRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [getError, setError] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);
  // let successRegistration = false;

  async function registerUser() {
    const user = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
      passwordTwo: passwordTwoRef.current.value,
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("http://localhost:4000/registerUser", options);
    const data = await res.json();
    console.log(data);

    if (data.success) {
      setError("User created. Please login to continue.");
      setSuccessRegistration(true);
      // nav("/");
    } else {
      setSuccessRegistration(false);
      setError(data.message);
      console.log("Else " + data.message);
      console.log("Else SuccReg: " + successRegistration);
    }
  }

  return (
    <div className="d-flex column form">
      <input type="text" ref={userNameRef} placeholder=" user name" />
      <input type="password" ref={passwordRef} placeholder=" password" />
      <input type="password" ref={passwordTwoRef} placeholder=" repeat password" />
      <input type="text" ref={nameRef} placeholder=" name" />
      <input type="text" ref={lastNameRef} placeholder=" last name" />
      <input type="email" ref={emailRef} placeholder=" e-mail" />
      <input type="text" ref={phoneRef} placeholder=" phone number +3706.. ..... " />
      <button onClick={registerUser}>Register user</button>
      <p className={`data_error ${successRegistration ? "green" : ""}`}>{getError}</p>
    </div>
  );
};

export default RegisterUserForm;
