/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashBoardDefaultPage from "./DashboardPages/DashBoardDefaultPage";
import DashBoardAddMoney from "./DashboardPages/DashBoardAddMoney";
import DashboardSideBar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";
import DashBoardTransfer from "./DashboardPages/DashBoardTransfer";
import DashBoardBills from "./DashboardPages/DashBoardBills";
import DashBoardTransactions from "./DashboardPages/DashBoardTransactions";
import "./DashboardStyles/dashboard.css";
import getUserInfo from "../helper/userhelper";
import FundEgax from "./DashboardPages/FundEgax";
import { useDispatch } from "react-redux";
const DashboardHome = () => {
  const dispatch = useDispatch();
  if (
    getUserInfo() === null ||
    getUserInfo() === undefined ||
    localStorage.getItem("x-token") === null
  ) {
    const currentUrl = window.location.href;
    localStorage.setItem("redirectUrl", currentUrl);
    return (window.location.href = "/login");
  } else {
    const redirectUrl = localStorage.getItem("redirectUrl");
    if (redirectUrl) {
      // Redirect the user to the stored URL
      window.location.href = redirectUrl;
      localStorage.removeItem("redirectUrl"); // Clear the stored URL after redirect
    }
  }

  useEffect(() => {
    dispatch({ type: "socket/connect" });
    return () => {
      dispatch({ type: "socket/disconnect" });
    };
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="dashBoardDiv1">
        <DashboardHeader />
      </div>
      <div className="container">
        <div className="dashBoardDiv2">
          <DashboardSideBar />
          <div className="dashboardPages">
            <Routes>
              <Route path="/app/home" element={<DashBoardDefaultPage />} />
              <Route path="/app/add-money" element={<DashBoardAddMoney />} />
              <Route path="/app/send-money" element={<DashBoardTransfer />} />
              <Route path="/app/fund-egax" element={<FundEgax />} />
              <Route
                path="/app/fund-egax/:wallet_address"
                element={<FundEgax />}
              />
              <Route
                path="/app/all-transactions"
                element={<DashBoardTransactions />}
              />
            </Routes>
          </div>
        </div>
      </div>
      <img src="/img/login_bg.jpeg" alt="" className="signup_div_bg2" />
    </div>
  );
};

export default DashboardHome;
