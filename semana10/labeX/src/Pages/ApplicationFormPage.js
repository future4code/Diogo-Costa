import React from "react";
import { useHistory } from "react-router-dom";

const ApplicationFormPage = () => {
  const history = useHistory();

  const handleToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Form</h1>
      <button onClick={handleToHome}>home</button>
    </div>
  );
};

export default ApplicationFormPage;
