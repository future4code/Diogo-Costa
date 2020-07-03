import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleToList = () => {
    history.push("/list");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/list");
    }
  }, [history]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLoginAdm = async () => {
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gaspar/login`,
        body
      );
      window.localStorage.setItem("token", response.data.token);
      console.log(response.data.token);

      alert(`Successo`);
      history.push("/list");
    } catch (error) {
      console.log(error);
      alert("Deu ruim");
    }
  };

  return (
    <div>
      {/* <Link to="/form">vai para form</Link */}
      <h2>LoginPage</h2>
      <button onClick={handleToList}>List</button>
      <input type="text" value={email} onChange={handleEmail} />
      <input type="text" value={password} onChange={handlePassword} />
      <button onClick={handleLoginAdm}>Login</button>
    </div>
  );
};

export default LoginPage;
