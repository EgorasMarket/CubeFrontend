/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashBoardAddMoney.css";
import Lottie from "lottie-react";
import cardIcon from "../../lottieIcons/cardIcon.json";
import { QRCode } from "react-qrcode-logo";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import Lottie from "lottie-react";
import loading from "../../lottieIcons/loading.json";
import bankIcon from "../../lottieIcons/bankIcon.json";
import blockChainIcon from "../../lottieIcons/blockchainIcon.json";
import fortUsers from "../../lottieIcons/transferAppUsersIcon.json";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { NumericFormat } from "react-number-format";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import "../DashboardStyles/dashboarddefaultpage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import getUserInfo from "../../helper/userhelper";
import {
  GENERATE_WATU_BANK_ACCOUNT,
  UPDATE_BVN,
  USER_ACCOUNT_NUMBER,
} from "../../Services/TransactionServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { updateBankDetails } from "../../features/userSlice/userSlice";
import PulseLoader from "react-spinners/PulseLoader";

const DashBoardAddMoney = () => {
  const dispatch = useDispatch();
  const { details, bank_details } = useSelector((state) => state.user);

  const [openCardModal, setOpenCardModal] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openFortUserModal, setOpenFortUserModal] = useState(false);
  const [noBvn, setNoBvn] = useState(false);
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [completeBvn, setCompleteBvn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("0xxxxxxx");
  const [walletAddressInfo, setWalletAddressInfo] = useState("");
  const [bankDetails, setBankDetails] = useState(false);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [loadingDiv, setLoadingDiv] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [bvn, setBvn] = useState("");

  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    setLoadingDiv(true);
    const timer = setTimeout(() => {
      setLoadingDiv(false);
    }, 2000);
  }, []);
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

  const handleBVNOnChange = (e) => {
    const { value } = e.target;

    if (value.length > 11) {
      return;
    }

    setBvn(value);
  };

  const submitBVN = async () => {
    setIsPending(true);
    const res = await UPDATE_BVN({ bvn });
    console.log(res);
    if (!res.success) {
      alert("failed to update BVN");
      return;
    }

    alert("successfully submitted bvn");
    window.location.reload();
  };

  const { data: getAccountNumber } = useQuery({
    queryKey: ["accountNumber"],
    queryFn: async () => {
      // dispatch(updateBankDetails({}));

      const res = await GENERATE_WATU_BANK_ACCOUNT();
      console.log("====================================");
      console.log(res, "oma");
      if (res.code === 200) {
        dispatch(updateBankDetails(res?.data?.vA?.data));
        return res?.data?.vA?.data;
      }
      if (res.status !== 200) {
        dispatch(updateBankDetails({}));

        if (
          res.data.errorMessage == "Cannot creeate Account, BVN not provided"
        ) {
          setNoBvn(true);
        } else {
          console.log("====================================");
          console.log(res.data.errorMessage);
          console.log("====================================");
        }
        return {};
      }

      return res;
    },
  });
  // const userAccountNumber = async () => {
  //   await getAccountNumber();
  // };

  // useEffect(() => {
  //   userAccountNumber();
  // }, []);

  // const generateAccount = async () => {
  //   const res = await GENERATE_WATU_BANK_ACCOUNT();

  //   console.log(res, "response...");
  //   if (!res.success) return;

  //   await dispatch(setBankDetails(res.data.vA.data));
  //   // setAccountInfo(res.data.vA.data);
  // };
  // useEffect(() => {
  //   generateAccount();
  // }, []);
  if (loadingDiv) {
    return (
      <div className="loading_div_area">
        <Lottie
          animationData={loading}
          loop={false}
          autoPlay={true}
          className="loadingIcon"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
    );
  }

  return (
    <div className="dashBoardAddMoneyDiv">
      <div className="dashBoardAddMoneyDiv_title">Add Money</div>
      <div className="dashBoardAddMoneyDiv_sub_title">
        How would you like to receive money?
      </div>
      <div className="dashBoardAddMoneyDiv_cont1">
        <img
          src="/img/add_icon.png"
          alt=""
          className="Transfer_withdraw_div_cont1_icon"
        />
        <div className="Transfer_withdraw_div_cont1_txt">Add Money</div>
      </div>
      <div className="dashBoardAddMoneyDiv_body">
        <div className="dashBoardAddMoneyDiv_body_area">
          {/* <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleOpenCardModal}
          >
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={cardIcon}
                  loop={false}
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
          </div> */}
          {/* ToggleBankTransferModal */}
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={() => {
              noBvn === true ? setCompleteBvn(true) : ToggleBankTransferModal();
            }}
          >
            <div className="dashBoardAddMoneyDiv_body_area1_cont1">
              <div className="dashBoardAddMoneyDiv_body_area1_icon">
                <Lottie
                  animationData={bankIcon}
                  loop={false}
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
                  loop={false}
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
                  loop={false}
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
                loop={false}
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
                <NumericFormat
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
                    loop={false}
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
                    <NumericFormat
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
                {bank_details?.account_number ? (
                  <>
                    <div className="receiveMoneyModalDiv_area1">
                      <Lottie
                        animationData={bankIcon}
                        loop={false}
                        autoPlay={true}
                        className="receiveMoneyModalDiv_area1_img"
                        preserveAspectRatio="xMidYMid meet"
                      />

                      <div className="receiveMoneyModalDiv_area1_text">
                        The account number provided is unique to your Cube
                        account.
                      </div>
                    </div>
                    <div className="receiveMoneyModalDiv_area2">
                      <div className="fund_bank_account_details_div">
                        <div className="fund_bank_account_details_div_cont1">
                          <div className="fund_bank_account_details_div_cont1_head">
                            1. Copy the account details provided below.
                          </div>
                          <div className="">
                            <div className="">
                              <div className="fund_bank_account_details_div_cont1_body_area1_head">
                                Bank Name
                              </div>
                              <div
                              // className="fund_bank_account_details_div_cont1_body_area1_body"
                              >
                                {bank_details?.bank_name} ({" "}
                                {bank_details?.account_name})
                              </div>
                            </div>
                            <div className="fund_bank_account_details_div_cont1_body_area1">
                              <div className="fund_bank_account_details_div_cont1_body_area1_head">
                                Bank Account Number
                              </div>
                              <div className="fund_bank_account_details_div_cont1_body_area1_body">
                                {bank_details?.account_number}
                                {bank_details?.accountName}
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
                  </>
                ) : (
                  <>
                    <div className="custom_container">
                      <div className="signup_div_section_div">
                        <div className="signup_div_section_div_title">
                          Submit BVN to Generate Account!
                        </div>

                        <div className="signup_div_section_div_container_form">
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          <label
                            htmlFor="password"
                            className="signup_div_section_div_container_form_label"
                          >
                            BVN:
                          </label>
                          <div className="password_div">
                            <input
                              type={"number"}
                              id="password"
                              name="password"
                              onChange={handleBVNOnChange}
                              // onChange={(e) => setBvn(e.target.value)}
                              className="signup_div_section_div_container_form_input_pasowrd"
                              autoComplete="off"
                              value={bvn}
                            />
                          </div>

                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}

                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          {/* ============ */}
                          <button
                            className="signup_div_section_div_container_form_btn"
                            onClick={submitBVN}
                            // disabled={true}
                            // disabled={disable}
                          >
                            {isPending ? (
                              <>
                                <PulseLoader color="#fff" height={20} />
                              </>
                            ) : (
                              " Submits"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
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

            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <div className="depositMoneyDiv_cont_1">
              <div className="depositMoneyDiv_cont_title_cont">
                <div className="depositMoneyDiv_cont_title_cont_title">
                  Deposit NGNT
                </div>
                <div className="depositMoneyDiv_cont_title_cont_para">
                  Add funds directly from a blockchain account
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body">
                <div className="depositMoneyDiv_cont_body_input_div">
                  <div className="depositMoneyDiv_cont_body_input_div_title">
                    Coin:
                  </div>
                  <div className="depositMoneyDiv_cont_body_input_div_div">
                    <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                      <img
                        src="https://i.imgur.com/JXm7zwC.png"
                        alt=""
                        className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                      />
                      Naira Token
                    </div>
                    <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                      NGNT
                    </div>
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_input_div2">
                  <div className="depositMoneyDiv_cont_body_input_div_title">
                    Network:
                  </div>
                  <div className="depositMoneyDiv_cont_body_input_div_div">
                    <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                      <img
                        src="/img/bsc_icon.png"
                        alt=""
                        className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                      />
                      EGOChain
                    </div>
                    <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                      EGO20
                    </div>
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_qr_div">
                  <QRCode
                    value={getUserInfo()?.wallet_address}
                    quietZone={5}
                    eyeColor="#fff"
                    bgColor="#161619"
                    fgColor="#fff"
                    logoImage="https://i.imgur.com/JXm7zwC.png"
                    eyeRadius={[
                      [5, 5, 0, 5],
                      [5, 5, 5, 0],
                      [5, 0, 5, 5],
                    ]}
                    removeQrCodeBehindLogo={true}
                    // logoPadding={5}
                    // logoWidth={15}
                    logoPaddingStyle="circle"
                    className="depositMoneyDiv_cont_body_qr_div_qr"
                  />
                  <div className="depositMoneyDiv_cont_body_qr_div_txt">
                    Scan Qrcode or copy wallet address to make payment
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_wallet_addr_div">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    WalletAddress:
                  </div>

                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                    <input
                      type="text"
                      value={getUserInfo()?.wallet_address}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                      id="myInput"
                    />
                    <button
                      className="depositMoneyDiv_cont_body_wallet_addr_div_btn"
                      onClick={() =>
                        copyWalletAddress(getUserInfo()?.wallet_address)
                      }

                      // onMouseOut={outFunc}
                    >
                      Copy
                      <ContentCopyOutlinedIcon className="depositMoneyDiv_cont_body_wallet_addr_div_btn_icon" />
                      {copiedTxt == true ? (
                        <div className="copiedToClipBoardDiv" onChange={timer}>
                          Wallet address copied to clipboard
                        </div>
                      ) : null}
                    </button>
                  </div>
                </div>

                <div className="depositMoneyDiv_cont_body_tips_div">
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Send only NGNT to this deposit address
                    </div>
                  </div>
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Ensure the network is EGOChain (EGO20)
                    </div>
                  </div>
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Do not send Nfts to this address
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
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
                {/* <img
                  src={
                    "https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=" +
                    getUserInfo()?.username
                  }
                  alt=""
                  className="receiveMoneyModalDiv_area1_cont1_img"
                /> */}
                <QRCode
                  value={getUserInfo()?.username}
                  quietZone={5}
                  eyeColor="#fff"
                  bgColor="#161619"
                  fgColor="#fff"
                  logoImage="https://i.imgur.com/JXm7zwC.png"
                  eyeRadius={[
                    [5, 5, 0, 5],
                    [5, 5, 5, 0],
                    [5, 0, 5, 5],
                  ]}
                  removeQrCodeBehindLogo={true}
                  // logoPadding={5}
                  // logoWidth={15}
                  logoPaddingStyle="circle"
                  className="depositMoneyDiv_cont_body_qr_div_qr"
                />
                <div
                  className="receiveMoneyModalDiv_area1_cont1_t"
                  style={{ textAlign: "left" }}
                >
                  Scan Qrcode or copy username below to receive money from other
                  Cube users.
                </div>
              </div>
              <div className="receiveMoneyModalDiv_area1_cont2_address">
                <div className="receiveMoneyModalDiv_area1_cont2_heading">
                  Cube username
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

      {completeBvn === true ? (
        <div className="bvn_complete_modal">
          <div className="bvn_complete_modal_cont">
            <div className="bvn_complete_modal_cont_title">BVN REQUIRED</div>
            <div className="bvn_complete_modal_cont_para">
              Please complete your identity verification to use this feauture.
            </div>
            <div className="bvn_complete_modal_cont_btn_divs">
              <button
                className="bvn_complete_modal_cont_btn1"
                onClick={() => setCompleteBvn(false)}
              >
                Cancel
              </button>
              <button className="bvn_complete_modal_cont_btn">
                Complete verification
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DashBoardAddMoney;
