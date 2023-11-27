import Dashboard from "./dashboard";
import Violations from "../administrator/violations";

const access = [
  {
    name: "Dashboard",
    icon: "tachometer-alt",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Test",
    icon: "tachometer-alt",
    path: "/test",
    component: Violations,
  },
];

export default access;
