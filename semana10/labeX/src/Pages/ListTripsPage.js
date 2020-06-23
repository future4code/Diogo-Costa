import React from "react";
import { useHistory } from "react-router-dom";

const ListTripPage = () => {
  const history = useHistory();

  const handleToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>List</h1>
      <p onClick={handleToHome}> paragráfo de teste</p>
    </div>
  );
};

export default ListTripPage;
