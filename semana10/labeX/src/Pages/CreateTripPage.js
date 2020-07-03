import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";

const CreateTripPage = () => {
  const history = useHistory();
  useProtectedPage();

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
