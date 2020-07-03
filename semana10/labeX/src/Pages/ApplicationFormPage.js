import React from "react";
import { useHistory } from "react-router-dom";

const ApplicationFormPage = () => {
  const history = useHistory();

  const handleToOpenList = () => {
    history.push("/open");
  };

  return (
    <div>
      <h1>Form</h1>
      <button onClick={handleToOpenList}>List</button>
    </div>
  );
};

export default ApplicationFormPage;
