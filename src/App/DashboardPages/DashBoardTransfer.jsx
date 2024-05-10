/* eslint-disable */
import React from "react";
import "../DashboardStyles/dashboardSendMoney.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Lottie from "lottie-react";
import cardIcon from "../../lottieIcons/cardIcon.json";
import bankIcon from "../../lottieIcons/bankIcon.json";
import blockChainIcon from "../../lottieIcons/blockchainIcon.json";
import fortUsers from "../../lottieIcons/transferAppUsersIcon.json";
const DashBoardTransfer = () => {
  return (
    <div className="dashBoardAddMoneyDiv">
      <div className="transferPage_title">Send Money</div>
      <div className="dashBoardAddMoneyDiv_sub_title">
        How would you like to send money?
      </div>
      <div className="dashBoardAddMoneyDiv_body">
        <div className="dashBoardAddMoneyDiv_body_area">
          <div className="dashBoardAddMoneyDiv_body_area1">
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={bankIcon}
                  loop={true}
                  autoPlay={true}
                  className="loadingTransferIcon"
                  preserveAspectRatio="xMidYMid meet"
                />
              </div>
              <div className="dashBoardAddMoneyDiv_body_area1_txt">
                Send To Bank Account
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
          <div className="dashBoardAddMoneyDiv_body_area1">
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={blockChainIcon}
                  loop={true}
                  autoPlay={true}
                  className="loadingTransferIcon"
                  preserveAspectRatio="xMidYMid meet"
                />
              </div>
              <div className="dashBoardAddMoneyDiv_body_area1_txt">
                Blockchain Payment
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
          <div className="dashBoardAddMoneyDiv_body_area1">
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={fortUsers}
                  loop={true}
                  autoPlay={true}
                  className="loadingTransferIcon"
                  preserveAspectRatio="xMidYMid meet"
                />
              </div>
              <div className="dashBoardAddMoneyDiv_body_area1_txt">
                Transfer To Cube Users
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTransfer;
