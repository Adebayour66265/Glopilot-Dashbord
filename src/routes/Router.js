import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { DarkModeContext } from "../context/darkModeContext";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/SingleCar";
import AllCar from "../pages/AllCars";
import Settings from "../pages/Settings";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/Forgot";
import Users from "../pages/UserList/UserList";
import Single from "../pages/single/Single";
import Driver from "../pages/DriverList/DriverList";
import Profile from "../pages/profile/Profile";
import New from "../pages/new/New";
import List from "../components/list/List";
import { userInputs } from "../formSource";
import ContentMain from '../components/ContentMain/ContentMain';
import ChatBody from "../components/chatBody/ChatBody";





const Router = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgetPassword />} />
        </Routes>
        <div className="main__layout">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/singleCar" element={<Bookings />} />
            <Route path="/allCars" element={<AllCar />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/users" element={<Users />} />
            <Route path="/drivers" element={<Driver />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/payment" element={<ContentMain />} />
            <Route path="/chat" element={<ChatBody />} />


            {/* users roles */}
            <Route path="user">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Admin" />}
              />
            </Route>
          </Routes>
        </div>
      </div>
      <Routes>{/* <Route path="/login" element={<Login />} /> */}</Routes>
    </>
  );
};

export default Router;
