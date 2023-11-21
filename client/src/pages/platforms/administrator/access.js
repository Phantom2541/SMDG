import Dashboard from "./dashboard";
import Announcements from "./announcements";
import Violations from "./violations";
import Enrollment from "./enrollment";
import Tree from "./orgChart";

const access = [
  {
    name: "Dashboard",
    icon: "tachometer-alt",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Users",
    icon: "users",
    path: "/users",
    children: [
      {
        name: "Moderators",
        path: "/moderators",
      },
      {
        name: "Members",
        path: "/members",
      },
    ],
  },
  {
    name: "Announcements",
    icon: "bullhorn",
    path: "/announcements",
    component: Announcements,
  },
  {
    name: "Violations",
    icon: "skull-crossbones",
    path: "/violations",
    component: Violations,
  },
  {
    name: "Enrollment",
    icon: "skull-crossbones",
    path: "/enrollment",
    component: Enrollment,
  },
  {
    name: "Org Chart",
    icon: "tree",
    path: "/orgChart",
    component: Tree,
  },
];

export default access;
