import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useLogoutButton } from "../Hooks/useLogoutButton";
import { ContainerTripsStyle } from "../styles/GlobalStyles";

const ListTripPage = () => {
  const [trips, setTrips] = useState([]);
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
      setTrips(response.data.trips);
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
    <ContainerTripsStyle>
      <button onClick={logoutBtn}>logout</button>
      <main>
        <h1>PRÓXIMAS VIAGENS</h1>
        {trips.map((trip) => (
          <section>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
          </section>
        ))}
        <button onClick={handleToCreate}>Create</button>
        <button onClick={handleToApproval}>Approval</button>
        <button onClick={handleToDetails}>Details</button>
      </main>
    </ContainerTripsStyle>
  );
};

export default ListTripPage;
