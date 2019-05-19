import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customer from "./components/customer";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customer" component={Customer} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
