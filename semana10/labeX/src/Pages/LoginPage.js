import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const handleToList = () => {
    history.push("/list");
  };

  return (
    <div>
      {/* <Link to="/form">vai para form</Link */}
      <h2>LoginPage</h2>
      <button onClick={handleToList}>List</button>
    </div>
  );
};

export default LoginPage;
