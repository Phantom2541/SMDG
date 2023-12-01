import Dashboard from "./dashboard";
import Announcements from "../principal/socials/announcements";
import Violations from "../principal/socials/violations";
import Tree from "../principal/orgCharts";
import Subjects from "../principal/resources/subjects";
import Enrollments from "../principal/admissions/enrollments";
import Requirements from "../principal/admissions/requirements";
import Rooms from "../principal/resources/rooms";
import Sections from "../principal/resources/sections";

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
    name: "Org Chart",
    icon: "tree",
    path: "/orgChart",
    component: Tree,
  },
  {
    name: "Subjects",
    icon: "book",
    path: "/subjects",
    component: Subjects,
  },
  {
    name: "Enrollment List",
    icon: "list",
    path: "/enrollmentList",
    component: Enrollments,
  },
  {
    name: "Requirements",
    icon: "list",
    path: "/requirements",
    component: Requirements,
  },
  {
    name: "Rooms",
    icon: "list",
    path: "/rooms",
    component: Rooms,
  },
  {
    name: "Sections",
    icon: "list",
    path: "/section",
    component: Sections,
  },
];

export default access;
