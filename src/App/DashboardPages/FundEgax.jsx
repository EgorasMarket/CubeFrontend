/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashboardSendMoney.css";
import Lottie from "lottie-react";
import bankIcon from "../../lottieIcons/bankIcon.json";
import blockChainIcon from "../../lottieIcons/blockchainIcon.json";
import fortUsers from "../../lottieIcons/transferAppUsersIcon.json";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import WithdrawNairaComponent from "./WithdrawNairaComponent";
import {
  USER_ACCOUNT_NUMBER,
  SEND_CRYPTO_FUNDS,
  SEND_FUNDS_INTERNAL,
  GENERATE_WATU_BANK_ACCOUNT,
  UPDATE_BVN,
} from "../../Services/TransactionServices";
import { useMutation, useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
import loading from "../../lottieIcons/loading.json";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_TO_WATCHER } from "../../Services/auth.services";
import PulseLoader from "react-spinners/PulseLoader";
import { updateBankDetails } from "../../features/userSlice/userSlice";

const FundEgax = () => {
  const dispatch = useDispatch();
  const { wallet_address } = useParams();
  const { details, bank_details } = useSelector((state) => state.user);

  const [openBankTransferModal, setOpenBankTransferModal] = useState(true);
  const [amount2, setAmount2] = useState(0);
  const [loadingDiv, setLoadingDiv] = useState(true);
  const [bankDetails, setBankDetails] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [completeBvn, setCompleteBvn] = useState(false);
  const [bvn, setBvn] = useState("");
  const [noBvn, setNoBvn] = useState(false);

  const [payload, setPayload] = useState({
    address: "",
    amount: "",
  });

  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    setLoadingDiv(true);
    const timer = setTimeout(() => {
      setLoadingDiv(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (wallet_address) {
      setPayload({ ...payload, address: wallet_address });
      return;
    }
  }, []);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload.address, [id]: value });
  };
  const ToggleBankTransferModal = () => {
    setOpenBankTransferModal(!openBankTransferModal);
    setAmount2(0);
  };

  const onChange2 = (e) => {
    setAmount2(e.target.value);
    console.log(e.target.value);
  };
  const ToggleBankDetails = () => {
    setBankDetails(!bankDetails);
  };

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
      if (res.code === 200) {
        console.log("solo", res);
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

  const handleContinue = async () => {
    if (payload.address === "" || payload.amount === "") {
      return;
    }
    console.log(payload);
    const res = await ADD_TO_WATCHER(payload);

    console.log(res, "from heaven");

    ToggleBankDetails();
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
    <div className="">
      {openBankTransferModal === true ? (
        <>
          {bankDetails == false ? (
            <div className="receiveMoneyModalDiv">
              <div className="receiveMoneyModalDiv_area">
                <div className="backDiv" onClick={ToggleBankTransferModal}>
                  <KeyboardArrowLeftIcon /> Back
                </div>
                <div className="receiveMoneyModalDiv_area1">
                  <div className="receiveMoneyModalDiv_area1_text">
                    Buy EGAX Directly
                  </div>
                </div>
                <div className="receiveMoneyModalDiv_area2">
                  <div className="receiveMoneyModalDiv_area2_inputArea1">
                    <div className="receiveMoneyModalDiv_area2_inputArea_title">
                      Enter Address
                    </div>

                    <input
                      type="text"
                      placeholder="0xXXXXXXXXXXXXXXX"
                      id="address"
                      name="address"
                      onChange={handleOnChange}
                      disabled={wallet_address}
                      value={payload.address}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    />

                    <div className="receiveMoneyModalDiv_area2_inputArea_title">
                      Enter Amount
                    </div>
                    <NumericFormat
                      value={payload.amount}
                      displayType={"number"}
                      thousandSeparator={true}
                      prefix={"₦ "}
                      name="amount"
                      id="amount"
                      onChange={handleOnChange}
                      className="loginArea1_inputArea_input"
                    />
                    {/* <input
                      type="text"
                      placeholder="200xxxxxx"
                      id="amount"
                      name="amount"
                      onChange={handleOnChange}
                      value={payload.amount}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    /> */}
                  </div>
                  <div className="receiveMoneyModalDiv_area2_inputArea2">
                    <button
                      className="receiveMoneyModalDiv_area2_inputArea2_btn"
                      // disabled={amount2 <= 0 ? true : false}
                      // onClick={ToggleBankDetails}
                      onClick={handleContinue}
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
                        Transfer NGN {payload.amount} to Receive EGAX
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
                                BANK NAME
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
                                ACCOUNT NUMBER
                              </div>
                              <div className="fund_bank_account_details_div_cont1_body_area1_body">
                                {bank_details?.account_number}
                                {bank_details?.accountName}
                              </div>
                            </div>
                            <div className="fund_bank_account_details_div_cont1_body_area1">
                              <div className="fund_bank_account_details_div_cont1_body_area1_head">
                                AMOUNT
                              </div>
                              <div className="fund_bank_account_details_div_cont1_body_area1_body">
                                NGN {payload.amount}
                              </div>
                            </div>
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

export default FundEgax;
