import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import HomePage from "./pages/HomePage";
import OrganisationPage from "./pages/OrganisationPage";
import QuizPage from "./pages/QuizPage";
import OrganisationsPage from "./pages/OrganisationsPage";
import OrganisationFormPage from "./pages/OrganisationFormPage";

export default function App() {
  return (
    <div className="m-5">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/organisations/:id" component={OrganisationPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/organisations" component={OrganisationsPage} />
        <Route path="/organisationForm" component={OrganisationFormPage} />
      </Switch>
    </div>
  );
}
