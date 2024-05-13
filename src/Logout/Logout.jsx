/* eslint-disable */
import React from "react";
import "./Logout.css";
import PowerSettingsNewTwoToneIcon from "@mui/icons-material/PowerSettingsNewTwoTone";
export const Logout = () => {
  const triggerLogout = () => {
    localStorage.removeItem("x-token");
    localStorage.removeItem("user-info");
    window.location.href = "/login";
  };
  return (
    <div className="logout_icon " id="logout" onClick={triggerLogout}>
      <PowerSettingsNewTwoToneIcon className="dashBoardSideBarDiv_sideBar_div_last_icon" />{" "}
      <div className="dashBoardSideBarDiv_sideBar_div_last_txt"> Log Out</div>
    </div>
  );
};

export default Logout;
