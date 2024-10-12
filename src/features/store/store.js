import { configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
import userSlice from "../userSlice/userSlice";
import socketSlice from "../socket/socketSlice";
import socketMiddleware from "../socket/socket.middleware";

const userConfig = {
  key: "user",
  storage: createIndexedDBStorage("cube_platform"),
};

const persistUser = persistReducer(userConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistUser,
    socket: socketSlice,
  },

  // devTools: false, // add this flag in production
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }).concat(socketMiddleware),
});

export const persistor = persistStore(store);
