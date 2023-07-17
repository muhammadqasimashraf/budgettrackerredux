import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
  const userState = useSelector((state) => state.userReducer);
  console.log("userState", userState);
  return (
    <div>
      <SideBar />
    </div>
  );
};

export default Dashboard;
