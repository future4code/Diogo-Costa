import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import ListTripsPage from "./Pages/ListTripsPage";
import CreateTripPage from "./Pages/CreateTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";

const Router = () => {
  return (
    <div>
      <h1>Router</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/form">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/create">
            <CreateTripPage />
          </Route>
          <Route exact path="/list">
            <ListTripsPage />
          </Route>
          <Route exact path="/details">
            <TripDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
