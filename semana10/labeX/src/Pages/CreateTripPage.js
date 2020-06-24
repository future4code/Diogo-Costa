import React from "react";
import { useHistory } from "react-router-dom";

const CreateTripPage = () => {
  const history = useHistory();

  const handleToList = () => {
    history.push("/list");
  };

  return (
    <div>
      <h1>Create</h1>
      <button onClick={handleToList}>list</button>
    </div>
  );
};

export default CreateTripPage;
