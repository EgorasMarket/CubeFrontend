/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashboardSendMoney.css";
import Lottie from "lottie-react";
import cardIcon from "../../lottieIcons/cardIcon.json";
import bankIcon from "../../lottieIcons/bankIcon.json";
import blockChainIcon from "../../lottieIcons/blockchainIcon.json";
import fortUsers from "../../lottieIcons/transferAppUsersIcon.json";
import { QRCode } from "react-qrcode-logo";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { NumericFormat } from "react-number-format";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import getUserInfo from "../../helper/userhelper";
import WithdrawNairaComponent from "./WithdrawNairaComponent";
import {
  USER_ACCOUNT_NUMBER,
  SEND_CRYPTO_FUNDS,
  SEND_FUNDS_INTERNAL,
} from "../../Services/TransactionServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
import loading from "../../lottieIcons/loading.json";

const DashBoardTransfer = () => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openFortUserModal, setOpenFortUserModal] = useState(false);
  const [noBvn, setNoBvn] = useState(false);
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [completeBvn, setCompleteBvn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("0xxxxxxx");
  const [walletAddressInfo, setWalletAddressInfo] = useState("");
  const [bankDetails, setBankDetails] = useState(false);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [userBal, setUserBal] = useState(1000);
  const [payload, setPayload] = useState({
    amount: "",
    symbol: "NGNT",
    network: "Egochain",
    wallet_address: "",
  });
  const [payload2, setPayload2] = useState({
    username_email: "",
    amount: "",
    symbol: "NGNT",
  });
  const [loadingDiv, setLoadingDiv] = useState(true);
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

  const changeInputData = (e) => {
    const { value, id } = e.target;

    setPayload({
      ...payload,

      [id]: value,
    });
  };
  const changeInputData2 = (e) => {
    const { value, id } = e.target;

    setPayload2({
      ...payload2,

      [id]: value,
    });
  };
  useEffect(() => {
    console.log("====================================");
    console.log(payload);
    console.log("====================================");
  }, [payload]);

  const {
    mutate: send_crypto_external,
    isError,
    error,
    isPending,
  } = useMutation({
    mutationKey: "send_crypto_external",
    mutationFn: async (payload) => {
      const res = await SEND_CRYPTO_FUNDS(payload);
      return res;
    },
    onSuccess: async (data) => {
      console.log(data, "alal");
    },
  });
  const {
    mutate: send_funds_internal,
    isError: isInternalError,
    error: is_error,
    isPending: internal_pending,
  } = useMutation({
    mutationKey: "send_crypto_internal",
    mutationFn: async (payload2) => {
      const res = await SEND_FUNDS_INTERNAL(payload2);
      return res;
    },
    onSuccess: async (data) => {
      console.log(data, "alal");
    },
  });

  const send_crypto = async () => {
    console.log("april");
    await send_crypto_external(payload);
  };
  const send_crypto_internal = async () => {
    console.log("april");
    await send_funds_internal(payload2);
  };

  const { data: getAccountNumber } = useQuery({
    queryKey: "accountNumber",
    queryFn: async () => {
      const res = await USER_ACCOUNT_NUMBER();
      console.log("====================================");
      console.log(res);
      if (res.code === 200) {
        setAccountNumber("23444");
        return;
      }
      if (res.status !== 200) {
        if (
          res.data.errorMessage == "Cannot creeate Account, BVN not provided"
        ) {
          setNoBvn(true);
        } else {
          console.log("====================================");
          console.log(res.data.errorMessage);
          console.log("====================================");
        }
        return;
      }

      return res;
    },
  });
  const userAccountNumber = async () => {
    await getAccountNumber();
  };

  useEffect(() => {
    userAccountNumber();
  }, []);

  const AddMax = () => {
    set;
  };
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
      <div className="dashBoardAddMoneyDiv_title">Transfer Money</div>
      <div className="dashBoardAddMoneyDiv_sub_title">
        How would you like to send money?
      </div>
      <div className="dashBoardAddMoneyDiv_cont">
        <img
          src="/img/send_icon.png"
          alt=""
          className="Transfer_withdraw_div_cont2_icon"
        />
        <div className="Transfer_withdraw_div_cont2_txt">Transfer Money</div>
      </div>
      <div className="dashBoardAddMoneyDiv_body">
        <div className="dashBoardAddMoneyDiv_body_area">
          <div
            className="dashBoardAddMoneyDiv_body_area1"
            onClick={ToggleBankTransferModal}
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
                Send To Bank Account
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
                Send To Blockchain address
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
                Send To Cube Users
              </div>
            </div>
            <KeyboardArrowRightIcon className="dashBoardAddMoneyDiv_body_area1_cont2_icon" />
          </div>
        </div>
      </div>
      {/* {openCardModal === true ? (
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
      ) : null} */}
      {openBankTransferModal === true ? (
        <WithdrawNairaComponent
          ToggleWithdrawNairaBankModal={() => setOpenBankTransferModal(false)}
        />
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
                  Send NGNT
                </div>
                <div className="depositMoneyDiv_cont_title_cont_para">
                  Send funds directly to a blockchain address
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body">
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    WalletAddress:
                  </div>
                  <input
                    type="text"
                    placeholder="0xXXXXXXXXXXXXXXX"
                    id="wallet_address"
                    name="wallet_address"
                    onChange={changeInputData}
                    value={payload.wallet_address}
                    className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                  />
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
                      Egochain
                    </div>
                    <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                      EGO20
                    </div>
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    Withdrawal Amount:
                  </div>
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      onChange={changeInputData}
                      placeholder="0.00"
                      value={payload.amount}
                      // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    />
                    <button
                      className="depositMoneyDiv_cont_body_wallet_addr_div_btn"
                      onClick={AddMax}
                    >
                      Max
                    </button>
                  </div>
                  <div className="availegc_bal_div">
                    <div className="availegc_bal_div_title">Available</div>
                    <div className="availegc_bal_div_amount">100 NGNT</div>
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    Withdrawal Remarks (optional):
                  </div>
                  <input
                    type="text"
                    // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                    className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                  />
                </div>

                <div className="depositMoneyDiv_cont_body_tips_divb">
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Minimum single withdrawal amount: 1000 NGNT
                    </div>
                  </div>
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Maximum single withdrawal amount: 1,000,000 NGNT
                    </div>
                  </div>
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Make sure the the receiver's wallet is a EGO20 wallet
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <div className="depositMoneyDiv_cont_2">
              <button
                className="depositMoneyDiv_cont_2_btn"
                onClick={send_crypto}
              >
                Withdraw NGNT
              </button>
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

            {/* = */}
            {/* = */}
            <div className="depositMoneyDiv_cont_1">
              <div className="depositMoneyDiv_cont_title_cont">
                <div className="depositMoneyDiv_cont_title_cont_title">
                  Send NGNT
                </div>
                <div className="depositMoneyDiv_cont_title_cont_para">
                  Send funds directly to a cube user
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
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    Recipient Email or Username:
                  </div>
                  <div className="depositMoneyDiv_cont_body_wallet_addr_divb_input_div">
                    <input
                      type="text"
                      id="username_email"
                      name="username_email"
                      onChange={changeInputData2}
                      value={payload2.username_email}
                      placeholder="@John Doe"
                      // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    />
                    {/* {fetchingUser && (
                      <div className="userNameLoader">
                        <ScaleLoader color="#366e51" height={20} />
                      </div>
                    )} */}
                    {/* {hasUserSuccess && (
                      <div className="userNameLoader2">
                        <img
                          src="/img/checked_icon.png"
                          alt=""
                          className="userNameLoader_img"
                        />
                      </div>
                    )} */}
                    {/* {hasUserError && (
                      <div className="userNameLoader2">
                        <img
                          src="/img/error_icon.png"
                          alt=""
                          className="userNameLoader_img"
                        />
                      </div>
                    )} */}
                  </div>

                  {/* {hasUser === true ? (
                    <div className="userNameLoaded_div">
                      <p className="userNameLoaded_div_para">
                        fullname: {beneficiaryData?.firstName}
                      </p>
                      <p className="userNameLoaded_div_para">
                        Email: {beneficiaryData?.email}
                      </p>
                      <p className="userNameLoaded_div_para">
                        Phone Number: {beneficiaryData?.phone}
                      </p>
                    </div>
                  ) : null} */}
                </div>
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    Withdrawal Amount:
                  </div>
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                    <input
                      type="number"
                      placeholder="0.00"
                      id="amount"
                      name="username_email"
                      onChange={changeInputData2}
                      value={payload2.amount}
                      // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                      // value={payload.amount}
                      // onChange={handleOnChange}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    />
                    <button
                      className="depositMoneyDiv_cont_body_wallet_addr_div_btn"
                      // onClick={AddMax}
                    >
                      Max
                    </button>
                  </div>
                  <div className="availegc_bal_div">
                    <div className="availegc_bal_div_title">Available</div>
                    <div className="availegc_bal_div_amount">90 NGNT</div>
                  </div>
                </div>
                <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
                  <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                    Withdrawal Remarks (optional):
                  </div>
                  <input
                    type="text"
                    // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                    className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                  />
                </div>

                <div className="depositMoneyDiv_cont_body_tips_divb">
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Minimum single withdrawal amount: 10 usd
                    </div>
                  </div>
                  <div className="depositMoneyDiv_cont_body_tips_div_1">
                    <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                    <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                      Maximum single withdrawal amount: 1,000,000 usd
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* = */}
            {/* = */}

            <div className="depositMoneyDiv_cont_2">
              <button
                className="depositMoneyDiv_cont_2_btn"
                onClick={send_crypto_internal}
              >
                Withdraw NGNT
              </button>
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

export default DashBoardTransfer;
