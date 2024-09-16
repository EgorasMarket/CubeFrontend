import { configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
import userSlice from "../userSlice/userSlice";

const userConfig = {
  key: "user",
  storage: createIndexedDBStorage("cube_platform"),
};

const persistUser = persistReducer(userConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistUser,
  },

  // devTools: false, // add this flag in production
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});

export const persistor = persistStore(store);
