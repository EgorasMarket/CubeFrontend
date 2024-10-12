/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./DashboardStyles/dashboardSidebar.css";
import { DashboardSquare02Icon } from "hugeicons-react";
import { MoneyAdd02Icon } from "hugeicons-react";
import { SentIcon } from "hugeicons-react";
import { Invoice03Icon } from "hugeicons-react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";
const DashboardSideBar = () => {
  const [activeBg, setActiveBg] = useState("home");
  const currentPage = window.location.pathname;
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  useEffect(() => {
    if (currentPage === "/app/home") {
      setActiveBg("home");
    }
    if (currentPage === "/app/add-money") {
      setActiveBg("add");
    }
    if (currentPage === "/app/send-money") {
      setActiveBg("transfer");
    }
    if (currentPage === "/app/all-transactions") {
      setActiveBg("transaction");
    }
    if (currentPage === "/app/pay_bills") {
      setActiveBg("bills");
    }
  }, []);

  return (
    <div className="dashBoardSideBarDiv_sideBar">
      <Link
        to="/app/home"
        className={
          activeBg === "home"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="home"
        onClick={changeBg}
      >
        <DashboardSquare02Icon
          size={25}
          className="dashBoardSideBarDiv_sideBar_div_icon"
        />

        {/* <DashboardTwoToneIcon className="dashBoardSideBarDiv_sideBar_div_icon" />{" "} */}
        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Home</div>
      </Link>
      {/* <div className="dashBoardSideBarDiv_sideBar_div">
        <DashboardTwoToneIcon className="dashBoardSideBarDiv_sideBar_div_icon" />{" "}
        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Qr Pay</div>
      </div> */}
      <Link
        to="/app/add-money"
        className={
          activeBg === "add"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="add"
        onClick={changeBg}
      >
        <MoneyAdd02Icon
          size={25}
          className="dashBoardSideBarDiv_sideBar_div_icon"
        />

        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Add Money</div>
      </Link>
      <Link
        to="/app/fund-egax"
        className={
          activeBg === "fund"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="add"
        onClick={changeBg}
      >
        <MoneyAdd02Icon
          size={25}
          className="dashBoardSideBarDiv_sideBar_div_icon"
        />

        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Fund Egax</div>
      </Link>
      <Link
        to="/app/send-money"
        className={
          activeBg === "transfer"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="transfer"
        onClick={changeBg}
      >
        <SentIcon size={25} className="dashBoardSideBarDiv_sideBar_div_icon" />
        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Transfer</div>
      </Link>
      <Link
        to="/app/all-transactions"
        className={
          activeBg === "transaction"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="transaction"
        onClick={changeBg}
      >
        <Invoice03Icon
          size={25}
          className="dashBoardSideBarDiv_sideBar_div_icon"
        />
        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Transactions</div>
      </Link>
      {/* <a
        href="/app/pay_bills"
        className={
          activeBg === "bills"
            ? "dashBoardSideBarDiv_sideBar_div__active"
            : "dashBoardSideBarDiv_sideBar_div"
        }
        id="bills"
        onClick={changeBg}
      >
        <LightbulbTwoToneIcon className="dashBoardSideBarDiv_sideBar_div_icon" />{" "}
        <div className="dashBoardSideBarDiv_sideBar_div_txt"> Pay Bills</div>
      </a> */}
      <div className="dashBoardSideBarDiv_sideBar_div_last">
        <Logout />
      </div>
    </div>
  );
};

export default DashboardSideBar;
