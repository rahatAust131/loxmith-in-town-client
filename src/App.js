import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import About from "./components/HomePage/About/About";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/HomePage/Services/Services";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Reviews from "./components/HomePage/Reviews/Reviews";
import AddAdmin from "./components/Dashboard/AdminDashboard/AddAdmin/AddAdmin";
import AdminList from "./components/Dashboard/AdminDashboard/AdminList/AdminList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {loggedInUser.email && <h3>your email : {loggedInUser.email} </h3>}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <PrivateRoute path="/service/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/adminList">
            <AdminList />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
