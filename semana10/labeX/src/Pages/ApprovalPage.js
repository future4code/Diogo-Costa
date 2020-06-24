import React from "react";
import { useHistory } from "react-router-dom";

const ApprovalDetails = () => {
  const history = useHistory();

  const handleToList = () => {
    history.push("/list");
  };

  return (
    <div>
      <h1>Approval</h1>
      <button onClick={handleToList}>List</button>
    </div>
  );
};

export default ApprovalDetails;
