import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/User/Home";
import RestDetails from "./components/User/RestaurantDetails";
import AdminHome from "./components/Admin/Home";
import AdminSignup from "./components/Admin/Signup";
import AdminSignin from "./components/Admin/Signin";
import AdminOrders from "./components/Admin/Orders";

class App extends Component {
  render() {
    return (
      <div className="font-poppins">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/rest" element={<RestDetails />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/signin" element={<AdminSignin />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
