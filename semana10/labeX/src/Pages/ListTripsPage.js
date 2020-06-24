import React from "react";
import { useHistory } from "react-router-dom";

const ListTripPage = () => {
  const history = useHistory();

  const handleToCreate = () => {
    history.push("/create");
  };

  const handleToApproval = () => {
    history.push("/approval");
  };

  const handleToDetails = () => {
    history.push("/details");
  };

  return (
    <div>
      <h1>List</h1>
      <button onClick={handleToCreate}>Create</button>
      <button onClick={handleToApproval}>Approval</button>
      <button onClick={handleToDetails}>Details</button>
    </div>
  );
};

export default ListTripPage;
