import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";

const TripDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const history = useHistory();
  useProtectedPage();

  //Isso é parte da tentativa de pegar os IDs
  const [trips, setTrips] = useState([]); //lembrar dos brackets

  useEffect(() => {
    getTrips();
    getDetails();
  }, []);

  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    header: {
      auth: token,
    },
  };

  // Isso é uma tentaviva de pegar os IDS
  const getTrips = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gaspar/trips`
      );
      setTrips(response.data.trips[0].id); // lembrar de conferir o que vem após o data
      
      console.log(response.data.trips);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gaspar/trip/18z6kt3ItSsjGEPJ81wz`,
        axiosConfig
      );
      setDetails(response.data.trip);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToList = () => {
    history.push("/list");
  };

  return (
    <div>
      <h1>Details</h1>
      <h1>{details}</h1>
      <h4>{trips}</h4>
      <button onClick={handleToList}>List</button>
    </div>
  );
};

export default TripDetailsPage;
