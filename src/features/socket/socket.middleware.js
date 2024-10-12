import io from "socket.io-client";
import { setConnectionStatus, addMessage } from "./socketSlice";
import { BASE_SERVER } from "../../Services/routes";

const socketMiddleware = (store) => {
  console.log(store, "all store data");
  let socket;

  return (next) => (action) => {
    const { dispatch, getState } = store;
    if (action.type === "socket/connect") {
      socket = io(BASE_SERVER);

      socket.on("connect", () => {
        dispatch(setConnectionStatus(true));
        console.log("socket is now  connected", socket);
      });

      socket.on("disconnect", () => {
        dispatch(setConnectionStatus(false));
      });

      socket.on("message", (message) => {
        dispatch(addMessage(message));
      });

      socket.on("deposit", (message) => {
        console.log("fetch new deposit", message);
      });
    }
    if (action.type === "socket/disconnect") {
      if (socket) socket.disconnect();
    }

    next(action);
  };
};

export default socketMiddleware;
