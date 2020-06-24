import React from "react";
import { useHistory } from "react-router-dom";

const OpenListTripsPage = () => {
  const history = useHistory();

  const handleToApplication = () => {
    history.push("/form");
  };
  return (
    <div>
      <h1>Open List</h1>
      <button onClick={handleToApplication}>Application</button>
    </div>
  );
};

export default OpenListTripsPage;
