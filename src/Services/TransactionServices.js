import server from "./axiosInstance";
import {
  TRANSACTION_ROUTE,
  USER_BALANCE_ROUTE,
  GET_USER_BANK_NUMBER_ROUTE,
  SEND_FUNDS_CRYPTO_ROUTE,
  SEND_FUNDS_INTERNAL_ROUTE,
  LIST_BANKS_ROUTE,
  VERIFY_BANK_ROUTE,
} from "./routes";

export const LIST_BANKS = async () => {
  try {
    const res = await server.get(LIST_BANKS_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const TRANSACTIONS = async () => {
  try {
    const res = await server.get(TRANSACTION_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const USER_BALANCE = async () => {
  try {
    const res = await server.get(USER_BALANCE_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const USER_ACCOUNT_NUMBER = async () => {
  try {
    const res = await server.get(GET_USER_BANK_NUMBER_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const SEND_CRYPTO_FUNDS = async (payload) => {
  try {
    const res = await server.post(SEND_FUNDS_CRYPTO_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const SEND_FUNDS_INTERNAL = async (payload) => {
  try {
    const res = await server.post(SEND_FUNDS_INTERNAL_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const VERIFY_BANK = async (payload) => {
  try {
    const res = await server.post(VERIFY_BANK_ROUTE, payload);
    console.log("dhdhdh");
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
