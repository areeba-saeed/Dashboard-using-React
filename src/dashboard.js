import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin";
import Superadmin from "./components/superadmin";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Side/Navbar";
import Sidebar from "./components/Side/Sidebar";
import User from "./components/User";
import Products from "./components/Products";
function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div id="dashboard">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<User />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
