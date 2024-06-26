/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashboarddefaultpage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const DashBoardDefaultPage = () => {
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [tranPopUp, setTranPopUp] = useState(0);

  // this gives an object with dates as keys
  const groups = transaction.reduce((groups, data) => {
    const date = data.createdAt.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(data);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      data: groups[date],
    };
  });

  console.log(groupArrays);
  const ChangeTranPopUp = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTranPopUp(currentTarget);
  };
  const closeTranPop = () => {
    setTranPopUp(0);
    console.log("i am not here");
  };
  return (
    <div className="defaultPage">
      <div className="defaultPage_title">Home</div>
      <div className="defaultPage_sub_title">Welcome back, Cyntax.</div>
      <div className="defaultPage_body">
        <div className="defaultPage_body_area1">
          <div className="defaultPage_body1">
            <div className="defaultPage_body1_cont2">Your NGNC balance</div>

            <div className="defaultPage_body1_cont1">
              <span className="defaultPage_body1_cont1_span"> ₦</span>
              {parseInt(1000).toFixed(2)}
            </div>
          </div>
          <button className="defaultPage_body2">
            <AddCircleIcon className="addMoney_icon" />
            Add money
          </button>
        </div>
        <div className="defaultPage_body_area2">
          <div className="defaultPage_body_area2_cont1">
            <div className="defaultPage_body_area2_transaction_heading">
              Recent Transaction
            </div>
            <a
              href="/app/all-transactions"
              className="defaultPage_body_area2_transaction_heading_link"
            >
              See all
            </a>
          </div>
          <div className="transactionBody">
            {groupArrays.slice(0, 3).map((data) => (
              <>
                <div className="transactionBody1_date">{data.date}</div>

                {data.data.map((data) => (
                  <div
                    className="transactionBody_cont1"
                    id={data.id}
                    // key={data.id}
                    onClick={ChangeTranPopUp}
                  >
                    <div className="transactionBody_cont1_areabody1">
                      <div className="transactionBody_cont1_img">
                        <img
                          src={data.image}
                          alt=""
                          className="transactionBody_cont1_img_img"
                        />
                      </div>
                      <div className="transactionBody_cont1_area1">
                        <div className="transactionBody_cont1_area1_head">
                          {data.to_email === "samuelify225@gmail.com"
                            ? data.email
                            : data.to_email}
                        </div>
                        <div className="transactionBody_cont1_area1_time">
                          {data.status}
                        </div>
                      </div>
                    </div>
                    <div className="transactionBody_cont1_areabody2">
                      <div className="transactionBody_cont1_areabody2_amount">
                        {data.to_email === "samuelify225@gmail.com" ? (
                          <div style={{ color: "green" }}>
                            {" "}
                            +₦
                            {parseInt(data.amount).toFixed(2)}
                          </div>
                        ) : (
                          <div style={{ color: "red" }}>
                            {" "}
                            -₦
                            {parseInt(data.amount).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
          {transaction.map((data) => (
            <>
              {tranPopUp == data.id ? (
                <div key={data.id} className="trans_div">
                  <div className="tranPop_div">
                    <div className="tranPopHeading">
                      Transaction Details{" "}
                      <span className="tranPopOutButton">
                        <CloseIcon
                          className="closeTranPopDiv"
                          onClick={closeTranPop}
                        />
                      </span>
                    </div>
                    <div className="tranPop_div_cont1">
                      {" "}
                      <div className="deposited_icon">
                        {data.to_email === "samuelify225@gmail.com" ? (
                          <ArrowDownwardIcon className="arrow_down_deposit_icon" />
                        ) : (
                          <ArrowUpwardIcon
                            className="arrow_down_deposit_icon"
                            style={{ background: "red" }}
                          />
                        )}{" "}
                      </div>
                      <span className="transPopData">
                        {" "}
                        {data.to_email === "samuelify225@gmail.com"
                          ? "Credit"
                          : "Debit"}{" "}
                      </span>
                    </div>
                    <div className="tranPop_div_cont1">
                      Date{" "}
                      <span className="transPopData">
                        {" "}
                        {data.createdAt.slice(0, 10)}
                      </span>{" "}
                    </div>
                    <div className="tranPop_div_cont1">
                      Amount{" "}
                      <span className="transPopData">
                        {" "}
                        {data.to_email === "samuelify225@gmail.com" ? (
                          <div style={{ color: "green" }}>
                            {" "}
                            +₦
                            {parseInt(data.amount).toFixed(2)}
                          </div>
                        ) : (
                          <div style={{ color: "red" }}>
                            {" "}
                            -₦
                            {parseInt(data.amount).toFixed(2)}
                          </div>
                        )}
                      </span>{" "}
                    </div>
                    <div className="tranPop_div_cont1">
                      From <span className="transPopData">{data.email}</span>
                    </div>
                    <div className="tranPop_div_cont1">
                      To <span className="transPopData">{data.to_email}</span>
                    </div>
                    <div className="tranPop_div_cont1">
                      Status{" "}
                      <span className="transPopData">
                        <CircleIcon className="complete_circle" />
                        {data.status}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardDefaultPage;
