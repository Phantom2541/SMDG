import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import users from "./slices/users";
import roles from "./slices/roles";
import violations from "./slices/violations";
import announcements from "./slices/announcements";

const store = configureStore({
  reducer: {
    auth,
    users,
    roles,
    violations,
    announcements,
  },
});

export default store;
