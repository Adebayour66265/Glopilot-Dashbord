import React from "react";
import "../styles/bookings.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import TopNav from "../components/TopNav/TopNav.jsx";

const Bookings = () => {
  return (
    <>
      <Sidebar />
      <TopNav />
      <div className="bookings">
        <div className="booking__wrapper">
          <h2 className="booking__title">All Register Cars</h2>

          <div className="filter__widget-wrapper">
            <div className="filter__widget-01">
              <div className="search-back">
                <input type="text" placeholder="search or type" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="booking__car-list">
            {carData?.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
