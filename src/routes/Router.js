import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/SingleCar";
import AllCar from "../pages/AllCars";
import Settings from "../pages/Settings";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/Forgot";
import Users from '../pages/UserList/UserList';
import Profile from '../pages/profile/Profile';

const Router = () => {
  return (
    <Routes>
      
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allCars" element={<Bookings />} />
      <Route path="/singleCar" element={<AllCar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgetPassword />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
};

export default Router;
