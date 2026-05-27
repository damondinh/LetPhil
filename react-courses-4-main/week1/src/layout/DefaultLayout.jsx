import React from "react";
import { Navbar } from "../components/Navbar";
import { Link, Outlet, useParams } from "react-router";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col auto-0">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div>
      <Link to="dashboard">Dashboard</Link>
      <Link to="transaction">Transaction</Link>
      <Link to="wallet">Wallet</Link>
      <Link to="goals">Goals</Link>
    </div>
  );
};

const ShaysLayout = () => {
  return (
    <div>
      <header></header>
      <leftsidebar></leftsidebar>
      <Outlet />
      <rightsidebar>
        <Link to="/student-info" />
      </rightsidebar>
    </div>
  );
};
