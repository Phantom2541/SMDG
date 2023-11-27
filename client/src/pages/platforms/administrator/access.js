import Dashboard from "./dashboard";
import Announcements from "../principal/announcements";
import Violations from "../principal/violations";
import Enrollment from "./enrollment";
import Tree from "../principal/orgCharts";
import Subjects from "../principal/subjects";
import EnrollmentList from "../principal/enrollments";
import Requirements from "../principal/requirements";
import Rooms from "../principal/rooms";
import EmploymentForm from "./employments";
import Sections from "../principal/sections";

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
    name: "Employment",
    icon: "skull-crossbones",
    path: "/employment",
    component: EmploymentForm,
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
    component: EnrollmentList,
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
