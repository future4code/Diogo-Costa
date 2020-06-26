import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useLogoutButton } from "../Hooks/useLogoutButton";

const ListTripPage = () => {
  const [trips, setTrips] = useState([]); //lembrar dos brackets
  const history = useHistory();
  const logoutBtn = useLogoutButton();
  useProtectedPage();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gaspar/trips`
      );
      setTrips(response.data.trips); // lembrar de conferir o que vem após o data
      console.log(trips);
    } catch (error) {
      console.log(error);
    }
  };

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
      <button onClick={logoutBtn}>logout</button>
      <h1>List</h1>
      {trips.map((trip) => (
        <>
          <h2>{trip.name}</h2>
          <h2>{trip.id}</h2>
        </>
      ))}
      <button onClick={handleToCreate}>Create</button>
      <button onClick={handleToApproval}>Approval</button>
      <button onClick={handleToDetails}>Details</button>
    </div>
  );
};

export default ListTripPage;
