import React from "react";
import "./UsersStars.css";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";

// import { useDispatch, useSelector } from "react-redux";
import { FaUsers } from "react-icons/fa";
import InfoBox from "../infoBox/InfoBox";

// Icons
const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const UserStats = ({ products }) => {
  return (
    <div className="user-summary">
      <h3 className="--mt">User Stats</h3>
      <div className="info-summary">
        <InfoBox
          icon={icon1}
          title={"Total Users"}
          // count={users.length}
          bgColor="card1"
        />
        <InfoBox
          icon={icon2}
          title={"Verified Users"}
          // count={`$${formatNumbers(totalStoreValue.toFixed(2))} `}
          // count={verifiedUsers}
          bgColor="card2"
        />
        <InfoBox
          icon={icon3}
          title={"Unverified Users"}
          // count={unverifiedUsers}
          bgColor="card3"
        />
        <InfoBox
          icon={icon4}
          title={"Suspended Users"}
          // count={suspendedUsers}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default UserStats;
