import React from "react";
import "./DashboardStyles/dashboardHeader.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import getUserInfo from "../helper/userhelper";
import Logout from "../Logout/Logout";

const DashboardHeader = () => {
  return (
    <div className="dashBoardHeaderDiv">
      <div className="container">
        <div className="dashBoardHeaderDiv_area">
          <a href="/" className="header_div_area_1">
            Cub<span className="header_div_area_1_span">e</span>
          </a>
          <div className="dashBoardHeaderDiv_area2">
            <div className="dashBoardHeaderDiv_area2_cont1">
              <NotificationsNoneOutlinedIcon className="dashBoardHeaderDiv_area2_cont1_icon" />
            </div>
            <div className="dashBoardHeaderDiv_area2_cont2">
              <div className="dashBoardHeaderDiv_area2_cont2_div1">
                <img
                  src={`https://source.boringavatars.com/beam/30/${
                    getUserInfo().username
                  }`}
                  alt=""
                />
              </div>

              <div className="dashBoardHeaderDiv_area2_cont2_div2">
                {getUserInfo().username}
              </div>
              {/* <WbSunnyIcon className="lightIcon" /> */}
            </div>
            <div className="logout_mobile">
              <Logout />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default DashboardHeader;
