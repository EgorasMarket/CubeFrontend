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
import Lottie from "lottie-react";
import loading from "../lottieIcons/loading.json";
import "./DashboardStyles/dashboard.css";
const DashboardHome = () => {
  const [loadingDiv, setLoadingDiv] = useState(true);
  const [payload, setPayload] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    referral: "",
    countrycode: "",
    profilePic: null,
    isVerified: false,
    has2fa: false,
    user_pin: "",
    createdAt: "",
    updatedAt: "",
  });
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    setLoadingDiv(true);
    const timer = setTimeout(() => {
      setLoadingDiv(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(API_URL + "/api/me", null, config)
  //     .then((data) => {
  //       console.log(data.data.data.user);
  //       setPayload({
  //         id: data.data.data.user.id,
  //         firstName: data.data.data.user.firstName,
  //         lastName: data.data.data.user.lastName,
  //         email: data.data.data.user.email,
  //         phone: data.data.data.user.phone,
  //         username: data.data.data.user.username,
  //         referral: data.data.data.user.referral,
  //         countrycode: data.data.data.user.countrycode,
  //         profilePic: data.data.data.user.profilePic,
  //         isVerified: data.data.data.user.isVerified,
  //         has2fa: data.data.data.user.has2fa,
  //         user_pin: data.data.data.user.user_pin,
  //         createdAt: data.data.data.user.createdAt,
  //         updatedAt: data.data.data.user.updatedAt,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    // <>
    //   {loadingDiv === true ? (
    //     <div className="loading_div_area">
    //       <Lottie
    //         animationData={loading}
    //         loop={true}
    //         autoPlay={true}
    //         className="loadingIcon"
    //         preserveAspectRatio="xMidYMid meet"
    //       />
    //     </div>
    //   ) : (

    //   )}
    // </>
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
