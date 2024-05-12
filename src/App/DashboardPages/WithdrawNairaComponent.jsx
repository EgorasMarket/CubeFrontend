import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  LIST_BANKS,
  USER_ACCOUNT_NUMBER,
  SEND_CRYPTO_FUNDS,
  SEND_FUNDS_INTERNAL,
  VERIFY_BANK,
} from "../../Services/TransactionServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

const WithdrawNairaComponent = ({ ToggleWithdrawNairaBankModal, balance }) => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const [pinModal, setPinModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [bankList, setBankList] = useState([]);
  const [beneficiary, setBaneficiary] = useState("--");
  const [bankInfo, setBankInfo] = useState({
    bank_code: "",
    account_number: "",
    bank_name: "",
    account_name: "--", //remove in production
  });
  const [isNameResolved, setIsNameResolved] = useState(false);

  const [payload, setPayload] = useState({
    pin_code: "",
    symbol: "NGNC",
    amount: "",
    bank_info: {},
  });

  const fetchBankList = async () => {
    // if (bankList.length >= 1) return;
    const response = await LIST_BANKS();
    //// console.logog(response, "mma");
    console.log("====================================");
    console.log(response);
    console.log("====================================");

    setBankList(response.data.data);
  };

  const handleBankOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    //// console.logog(JSON.parse(value));
    // let temp = JSON.parse(value);

    // if (Object.keys(value).length === 0) return;

    setBankInfo({
      ...bankInfo,
      bank_code: value,
    });
  };
  const verify_account_number = async (number) => {
    console.log("gfggfgf", number, bankInfo);
    // const response = await VERIFY_BANK({
    //   number: number,
    //   bankCode: bankInfo.bank_code,
    // });
    // console.log("====================================");
    // console.log(response);
    // console.log("====================================");
    // if (!response.success) {
    //   setIsNameResolved(false);
    //   return;
    // }

    // setBaneficiary(response.data.responseBody.accountName);
    // setIsNameResolved(true);
  };
  const handleAccountNumberOnChange = async (e) => {
    const { value, id } = e.target;
    setBankInfo({
      ...bankInfo,
      account_number: value,
    });
    if (value.length === 10) {
      verify_account_number(value);
      return;
    }
    console.log(value);
    if (value.length > 10) return;

    // setBankInfo({ ...bankInfo, account_number: value });

    // verify_account_number(value);
    console.log("====================================");
    console.log(value);
    console.log("====================================");
    //// console.logog(bankInfo);

    return;
  };
  useEffect(() => {
    fetchBankList();
  }, []);

  const handlePayout = async () => {
    setLoading(true);
    setBankInfo({ ...bankInfo, account_name: beneficiary });
    // const pin = prompt("Please enter your Pin");
    let data = payload;

    data = {
      ...data,
      bank_info: { ...bankInfo, account_name: beneficiary },
      pin_code: pin,
    };

    const response = await PAYOUT_TO_BANK(data);
    setLoading(false);

    if (response.data?.success === false) {
      //   setPinModal(false);
      //   toast.error(response?.data?.errorMessage);
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      return;
    }

    // setPinModal(false);
    setSuccessMsg("Transaction succesful");
    setSuccessModal(true);
  };

  const handleAccountNameOnChange = async (e) => {};

  const AddMax = () => {
    setPayload({ amount: balance });
  };
  console.log("====================================");
  console.log(bankList);
  console.log("====================================");
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_cont">
        <ArrowBackOutlinedIcon
          className="depositMoneyDiv_icon"
          onClick={ToggleWithdrawNairaBankModal}
        />
        <div className="depositMoneyDiv_cont_1">
          <div className="depositMoneyDiv_cont_title_cont">
            <div className="depositMoneyDiv_cont_title_cont_title">
              Send Naira
            </div>
            <div className="depositMoneyDiv_cont_title_cont_para">
              Send Naira directly to a Bank account
            </div>
          </div>
          <div className="depositMoneyDiv_cont_body">
            <div className="depositMoneyDiv_cont_body_input_div2">
              <div className="depositMoneyDiv_cont_body_input_div_title">
                Currency:
              </div>
              <div className="depositMoneyDiv_cont_body_input_div_div">
                <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                  <img
                    src="https://i.imgur.com/JXm7zwC.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  Nigerian Naira
                </div>
                <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                  NGN
                </div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Bank:
              </div>
              <select
                name=""
                id=""
                placeholder="0xXXXXXXXXXXXXXXX"
                defaultValue={"0"}
                // onClick={fetchBankList}
                onChange={handleBankOnChange}
                className="depositMoneyDiv_cont_body_wallet_addr_div_input"
              >
                {/* <option value="1">Zenith bank</option> */}

                {bankList.length >= 1 ? (
                  bankList.map((bank, index) => {
                    console.log(bank, JSON.stringify(bank), "alllaalalall");
                    return (
                      <option key={index} value={bank?.code}>
                        {bank.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="">Show banks</option>
                )}
              </select>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Account Number:
              </div>
              <input
                type="number"
                placeholder="0xXXXXXXXXXXXXXXX"
                onChange={handleAccountNumberOnChange}
                value={bankInfo.account_number}
                className="depositMoneyDiv_cont_body_wallet_addr_div_input"
              />
            </div>

            {isNameResolved ? (
              <div className="depositMoneyDiv_cont_body_input_div2">
                <div className="depositMoneyDiv_cont_body_input_div_title">
                  Account Name:
                </div>
                <div className="depositMoneyDiv_cont_body_input_div_div">
                  {/* <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                  <img
                    src="/img/bsc_icon.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  Nigerian Naira
                </div> */}
                  <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                    <input
                      placeholder="johndoe"
                      onChange={handleAccountNameOnChange}
                      value={beneficiary}
                      className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="depositMoneyDiv_cont_body_input_div2">
                <div className="depositMoneyDiv_cont_body_input_div_div">
                  <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                    <p> Invalid Account</p>
                  </div>
                </div>
              </div>
            )}
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Withdrawal Amount:
              </div>
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                <input
                  type="number"
                  placeholder="0.00"
                  value={payload.amount}
                  onChange={(e) =>
                    setPayload({ ...payload, amount: e.target.value })
                  }
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
                <div className="availegc_bal_div_amount">100 NGN</div>
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
                  Minimum single withdrawal amount: ₦2,000.00
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Maximum single withdrawal amount: ₦100,000,000.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="depositMoneyDiv_cont_2">
          <button className="depositMoneyDiv_cont_2_btn" onClick={handlePayout}>
            Send Funds
          </button>
        </div>

        {/* 
        {successModal ? (
          <SuccessModal
            SuccesTxt={successMsg}
            successFunc={() => {
              window.location.href = "/dashboard/transaction";
            }}
          />
        ) : null} */}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

// comment here

export default WithdrawNairaComponent;
