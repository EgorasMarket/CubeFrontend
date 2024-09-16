/* eslint-disable */
import React from "react";
import "./Logout.css";
import PowerSettingsNewTwoToneIcon from "@mui/icons-material/PowerSettingsNewTwoTone";
import { useDispatch } from "react-redux";
import { setBankDetails, setDetails } from "../features/userSlice/userSlice";
export const Logout = () => {
  const dispatch = useDispatch();
  const triggerLogout = () => {
    localStorage.removeItem("x-token");
    localStorage.removeItem("user-info");

    dispatch(setDetails({}));
    dispatch(setBankDetails({}));
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
