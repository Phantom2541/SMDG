import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import users from "./slices/users";
import violations from "./slices/violations";
import announcements from "./slices/announcements";
import requirements from "./slices/admissions/requirements";
import rooms from "./slices/resources/rooms";
import subjects from "./slices/resources/subjects";

const store = configureStore({
  reducer: {
    auth,
    users,
    violations,
    announcements,
    requirements,
    rooms,
    subjects,
  },
});

export default store;
