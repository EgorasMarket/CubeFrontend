import axios from "axios";
import { ADD_TO_WATCHER_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./routes";
import server from "./axiosInstance";

export const LOGIN = async (payload) => {
  try {
    const res = await server.post(LOGIN_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const REGISTER = async (payload) => {
  try {
    const res = await server.post(REGISTER_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const ADD_TO_WATCHER = async (payload) => {
  try {
    const res = await server.post(ADD_TO_WATCHER_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
