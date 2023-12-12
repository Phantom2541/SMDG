import Dashboard from "./dashboard";
import Employment from "./employment";

const access = [
  {
    name: "Dashboard",
    icon: "tachometer-alt",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Employment",
    icon: "user",
    path: "/employment",
    component: Employment,
  },
];

export default access;
