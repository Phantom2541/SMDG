import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import users from "./slices/users";
import violations from "./slices/violations";
import announcements from "./slices/announcements";

const store = configureStore({
  reducer: {
    auth,
    users,
    violations,
    announcements,
  },
});

export default store;
