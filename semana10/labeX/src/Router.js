import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import ListTripsPage from "./Pages/ListTripsPage";
import CreateTripPage from "./Pages/CreateTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";
import ApprovalPage from "./Pages/ApprovalPage";
import OpenListTripsPage from "./Pages/OpenListTripsPage";

const Router = () => {
  return (
    <div>
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
          <Route exact path="/list">
            <ListTripsPage />
          </Route>
          <Route exact path="/create">
            <CreateTripPage />
          </Route>
          <Route exact path="/details">
            <TripDetailsPage />
          </Route>
          <Route exact path="/approval" component={ApprovalPage} />{" "}
          {/* gostei dessa sintaxe */}
          <Route exact path="/open" component={OpenListTripsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
