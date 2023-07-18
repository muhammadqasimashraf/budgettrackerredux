import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/SideBar";
import AddBudget from "../../components/AddBudget";

const Dashboard = () => {
  const userState = useSelector((state) => state.userReducer);
  console.log("userState", userState);
  return (
    <div className="d-flex">
      <SideBar />
      <AddBudget />
    </div>
  );
};

export default Dashboard;
