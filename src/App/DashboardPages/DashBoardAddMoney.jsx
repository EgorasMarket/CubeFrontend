/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashBoardAddMoney.css";
import Lottie from "lottie-react";
import cardIcon from "../../lottieIcons/cardIcon.json";
import bankIcon from "../../lottieIcons/bankIcon.json";
import blockChainIcon from "../../lottieIcons/blockchainIcon.json";
import fortUsers from "../../lottieIcons/transferAppUsersIcon.json";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import NumberFormat from "react-number-format";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import "../DashboardStyles/dashboarddefaultpage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const DashBoardAddMoney = () => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openFortUserModal, setOpenFortUserModal] = useState(false);
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [walletAddress, setWalletAddress] = useState("0xxxxxxx");
  const [walletAddressInfo, setWalletAddressInfo] = useState("");
  const [bankDetails, setBankDetails] = useState(false);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const ToggleOpenCardModal = () => {
    setOpenCardModal(!openCardModal);
    setAmount(0);
  };
  const ToggleOpenWalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };
  const ToggleOpenFortUserModal = () => {
    setOpenFortUserModal(!openFortUserModal);
  };
  const ToggleBankTransferModal = () => {
    setOpenBankTransferModal(!openBankTransferModal);
    setAmount2(0);
  };
  const ToggleBankDetails = () => {
    setBankDetails(!bankDetails);
  };
  const onChange = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };
  const onChange2 = (e) => {
    setAmount2(e.target.value);
    console.log(e.target.value);
  };

  const copyWalletAddress = (e) => {
    navigator.clipboard.writeText(e);
    // let currentId = e.currentTarget.id;
    // setActiveBg(currentId);
    setCopiedTxt(true);
  };
  const timer = setTimeout(() => {
    setCopiedTxt(false);
  }, 1000);
  return (
    <div className="dashBoardAddMoneyDiv">
      <div className="dashBoardAddMoneyDiv_title">Add Money</div>
      <div className="dashBoardAddMoneyDiv_sub_title">
        How would you like to receive money?
      </div>
      <div className="dashBoardAddMoneyDiv_body">
        <div className="dashBoardAddMoneyDiv_body_area">
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleOpenCardModal}
          >
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={cardIcon}
                  loop={true}
                  autoPlay={true}
                  className="loadingTransferIcon"
                  preserveAspectRatio="xMidYMid meet"
                />
              </div>
              <div className="dashBoardAddMoneyDiv_body_area1_txt">
                Card or Bank Account
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleBankTransferModal}
          >
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
                Bank Transfer
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleOpenWalletModal}
          >
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
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleOpenFortUserModal}
          >
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
                Receive From Cube Users
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
        </div>
      </div>
      {openCardModal === true ? (
        <div className="receiveMoneyModalDiv">
          <div className="receiveMoneyModalDiv_area">
            <div className="backDiv" onClick={ToggleOpenCardModal}>
              <KeyboardArrowLeftIcon /> Back
            </div>
            <div className="receiveMoneyModalDiv_area1">
              <Lottie
                animationData={cardIcon}
                loop={true}
                autoPlay={true}
                className="receiveMoneyModalDiv_area1_img"
                preserveAspectRatio="xMidYMid meet"
              />
              <div className="receiveMoneyModalDiv_area1_text">
                You will be charged for adding money with a card.
              </div>
            </div>
            <div className="receiveMoneyModalDiv_area2">
              <div className="receiveMoneyModalDiv_area2_inputArea1">
                <div className="receiveMoneyModalDiv_area2_inputArea_title">
                  Enter Amount
                </div>
                <NumberFormat
                  value={amount}
                  displayType={"number"}
                  thousandSeparator={true}
                  prefix={"₦ "}
                  name="amount"
                  onChange={onChange}
                  className="loginArea1_inputArea_input"
                />
              </div>
              <div className="receiveMoneyModalDiv_area2_inputArea2">
                <button
                  className="receiveMoneyModalDiv_area2_inputArea2_btn"
                  disabled={amount <= 0 ? true : false}
                  // onClick={ToggleAddCardModal}
                >
                  Proceed to Paystack
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {openBankTransferModal === true ? (
        <>
          {bankDetails == false ? (
            <div className="receiveMoneyModalDiv">
              <div className="receiveMoneyModalDiv_area">
                <div className="backDiv" onClick={ToggleBankTransferModal}>
                  <KeyboardArrowLeftIcon /> Back
                </div>
                <div className="receiveMoneyModalDiv_area1">
                  <Lottie
                    animationData={bankIcon}
                    loop={true}
                    autoPlay={true}
                    className="receiveMoneyModalDiv_area1_img"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  <div className="receiveMoneyModalDiv_area1_text">
                    Fund Via Bank Transfer
                  </div>
                </div>
                <div className="receiveMoneyModalDiv_area2">
                  <div className="receiveMoneyModalDiv_area2_inputArea1">
                    <div className="receiveMoneyModalDiv_area2_inputArea_title">
                      Enter Amount
                    </div>
                    <NumberFormat
                      value={amount2}
                      displayType={"number"}
                      thousandSeparator={true}
                      prefix={"₦ "}
                      name="amount"
                      onChange={onChange2}
                      className="loginArea1_inputArea_input"
                    />
                  </div>
                  <div className="receiveMoneyModalDiv_area2_inputArea2">
                    <button
                      className="receiveMoneyModalDiv_area2_inputArea2_btn"
                      disabled={amount2 <= 0 ? true : false}
                      onClick={ToggleBankDetails}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="receiveMoneyModalDiv">
              <div className="receiveMoneyModalDiv_area">
                <div className="backDiv" onClick={ToggleBankDetails}>
                  <KeyboardArrowLeftIcon /> Back
                </div>
                <div className="receiveMoneyModalDiv_area1">
                  <Lottie
                    animationData={bankIcon}
                    loop={true}
                    autoPlay={true}
                    className="receiveMoneyModalDiv_area1_img"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  <div className="receiveMoneyModalDiv_area1_text">
                    The account number provided is unique to your fort account.
                  </div>
                </div>
                <div className="receiveMoneyModalDiv_area2">
                  <div className="fund_bank_account_details_div">
                    <div className="fund_bank_account_details_div_cont1">
                      <div className="fund_bank_account_details_div_cont1_head">
                        1. Copy the account details provided below.
                      </div>
                      <div className="fund_bank_account_details_div_cont1_body">
                        <div className="fund_bank_account_details_div_cont1_body_area1">
                          <div className="fund_bank_account_details_div_cont1_body_area1_head">
                            Bank Name
                          </div>
                          <div className="fund_bank_account_details_div_cont1_body_area1_body">
                            Wema Bank PLC
                          </div>
                        </div>
                        <div className="fund_bank_account_details_div_cont1_body_area1">
                          <div className="fund_bank_account_details_div_cont1_body_area1_head">
                            Bank Account Number
                          </div>
                          <div className="fund_bank_account_details_div_cont1_body_area1_body">
                            7351202447 (Savings Account)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fund_bank_account_details_div_cont1">
                      <div className="fund_bank_account_details_div_cont1_head">
                        2. Transfer {amount2} using Mobile Banking.
                      </div>
                    </div>
                    <div className="fund_bank_account_details_div_cont1">
                      <div className="fund_bank_account_details_div_cont1_head">
                        3. Your Fort balance will be funded immediately.
                      </div>
                    </div>
                  </div>
                  <div className="receiveMoneyModalDiv_area2_inputArea2">
                    <button className="receiveMoneyModalDiv_area2_inputArea2_btn">
                      Copy Account Number
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : null}
      {openWalletModal === true ? (
        <div className="receiveMoneyModalDiv">
          <div className="receiveMoneyModalDiv_area">
            <div className="backDiv" onClick={ToggleOpenWalletModal}>
              <KeyboardArrowLeftIcon /> Back
            </div>
            <div className="receiveMoneyModalDiv_area1">
              <div className="receiveMoneyModalDiv_area1_cont1">
                <img
                  src={
                    "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                    walletAddress
                  }
                  alt=""
                  className="receiveMoneyModalDiv_area1_cont1_img"
                />
                <div className="receiveMoneyModalDiv_area1_cont1_t">
                  Scan Qrcode or copy the wallet address below to receive money.
                </div>
              </div>
              <div className="receiveMoneyModalDiv_area1_cont2_address">
                <div className="receiveMoneyModalDiv_area1_cont2_heading">
                  Wallet Address
                </div>
                <div className="copy_qr_code_txt_div">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span className="walletAddress_txt">{walletAddress}</span>
                    <FileCopyIcon
                      className="file_icon_copy"
                      onClick={() => copyWalletAddress(walletAddress)}
                      // onMouseOut={outFunc}
                    />

                    {copiedTxt == true ? (
                      <div className="copiedToClipBoardDiv" onChange={timer}>
                        Wallet address copied to clipboard
                      </div>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="receiveMoneyModalDiv_area2_wallet_txt">
              {walletAddressInfo}
            </div>
          </div>
        </div>
      ) : null}
      {openFortUserModal === true ? (
        <div className="receiveMoneyModalDiv">
          <div className="receiveMoneyModalDiv_area">
            <div className="backDiv" onClick={ToggleOpenFortUserModal}>
              <KeyboardArrowLeftIcon /> Back
            </div>
            <div className="receiveMoneyModalDiv_area1">
              <div className="receiveMoneyModalDiv_area1_cont1">
                <img
                  src={
                    "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                    cyntax
                  }
                  alt=""
                  className="receiveMoneyModalDiv_area1_cont1_img"
                />
                <div className="receiveMoneyModalDiv_area1_cont1_t">
                  Scan Qrcode or copy username below to receive money from other
                  Cube users.
                </div>
              </div>
              <div className="receiveMoneyModalDiv_area1_cont2_address">
                <div className="receiveMoneyModalDiv_area1_cont2_heading">
                  Fort username
                </div>
                <div className="copy_qr_code_txt_div">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span className="walletAddress_txt">cyntax</span>
                    <FileCopyIcon
                      className="file_icon_copy"
                      onClick={() => copyWalletAddress("cyntax")}
                      // onMouseOut={outFunc}
                    />

                    {copiedTxt == true ? (
                      <div className="copiedToClipBoardDiv" onChange={timer}>
                        Username copied to clipboard
                      </div>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DashBoardAddMoney;
