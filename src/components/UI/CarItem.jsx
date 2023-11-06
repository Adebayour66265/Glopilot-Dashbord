import React from "react";
import { Link } from "react-router-dom";

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
            <p className="car__details">
            <Link to="/AllCars">view details</Link>
            </p>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car__rent">${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
