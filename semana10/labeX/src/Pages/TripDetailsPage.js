import React from "react";
import { useHistory } from "react-router-dom";

const TripDetailsPage = () => {
  const history = useHistory();

  const handleToList = () => {
    history.push("/list");
  };

  return (
    <div>
      <h1>Details</h1>
      <button onClick={handleToList}>List</button>
    </div>
  );
};

export default TripDetailsPage;
