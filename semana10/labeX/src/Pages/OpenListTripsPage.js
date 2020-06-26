import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const OpenListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gaspar/trips`
      )
      .then((response) => {
        setTrips(response.data.trips);
      });
  }, []);

  const handleToApplication = () => {
    history.push("/form");
  };

  return (
    <div>
      <h1>Open List</h1>
      {trips.map((trip) => (
        <h3>{trip.description}</h3>
      ))}
      <button onClick={handleToApplication}>Application</button>
    </div>
  );
};

export default OpenListTripsPage;
