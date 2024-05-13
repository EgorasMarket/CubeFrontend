/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../DashboardStyles/dashboarddefaultpage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Staticdata from "../../Components/json/Static";
import "../DashboardStyles/dashBoardTransactions.css";
import Lottie from "lottie-react";
import loading from "../../lottieIcons/loading.json";
import getUserInfo from "../../helper/userhelper";
import { TRANSACTIONS, USER_BALANCE } from "../../Services/TransactionServices";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { TablePagination } from "../../Components/Tables/TableComp";
const DashBoardTransactions = () => {
  const [transaction, setTransaction] = useState([]);
  // const [tableData, setTableData] = useState([]);

  const [tranPopUp, setTranPopUp] = useState(0);
  const [loadingDiv, setLoadingDiv] = useState(true);
  const [contentLoadingTable, setContentLoadingTable] = useState(true);

  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    setLoadingDiv(true);
    const timer = setTimeout(() => {
      setLoadingDiv(false);
    }, 2000);
  }, []);

  const { data: getTransaction, isPending: getTransactionLoding } = useQuery({
    queryKey: "transaction",
    queryFn: async () => {
      const res = await TRANSACTIONS();
      console.log("====================================");
      console.log(res);
      if (res.code === 200) {
        setTransaction(res.data);
        return;
      }

      return res;
    },
  });
  const transactionFunc = async () => {
    await getTransaction();
  };
  useEffect(() => {
    transactionFunc();
  }, []);
  // const groups = transaction.reduce((groups, data) => {
  //   const date = data.createdAt.split("T")[0];
  //   if (!groups[date]) {
  //     groups[date] = [];
  //   }
  //   groups[date].push(data);
  //   return groups;
  // }, {});

  // // Edit: to add it in the array format instead
  // const groupArrays = Object.keys(groups).map((date) => {
  //   return {
  //     date,
  //     data: groups[date],
  //   };
  // });

  // console.log(groupArrays);
  // const ChangeTranPopUp = (e) => {
  //   let currentTarget = e.currentTarget.id;
  //   console.log(currentTarget);
  //   setTranPopUp(currentTarget);
  // };
  // const closeTranPop = () => {
  //   setTranPopUp(0);
  //   console.log("i am not here");
  // };
  if (loadingDiv) {
    return (
      <div className="loading_div_area">
        <Lottie
          animationData={loading}
          loop={true}
          autoPlay={true}
          className="loadingIcon"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
    );
  }
  return (
    <div className="transactionPage">
      <div className="transactionPage_title">All Transactions</div>
      <div className="transactionPage_body">
        <TablePagination
          TableData={transaction}
          contentLoading={getTransactionLoding}
          dummyData={Staticdata.productsTableData.slice(0, 8)}
          userName={getUserInfo().username}
        />
      </div>
    </div>
  );
};

export default DashBoardTransactions;
