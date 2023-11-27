import Announcements from "../principal/announcements";
import Enrollments from "../principal/enrollments";
import OrgCharts from "../principal/orgCharts/orgchart";
import Requirements from "../principal/requirements";
import Rooms from "../principal/rooms";
import Sections from "../principal/sections";
import Subjects from "../principal/subjects";
import Violations from "../principal/violations";
import Dashboard from "./dashboard";

const access = [
  {
    name: "Dashboard",
    icon: "tachometer-alt",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Announcements",
    icon: "tachometer-alt",
    path: "/announcements",
    component: Announcements,
  },

  {
    name: "Org Chart",
    icon: "tachometer-alt",
    path: "/orgCharts",
    component: OrgCharts,
  },
  {
    name: "Subjects",
    icon: "book-open",
    path: "/subjects",
    component: Subjects,
  },
  {
    name: "Lists",
    icon: "list",
    path: "/lists",
    children: [
      {
        name: "Requirements",
        path: "/requirements",
        component: Requirements,
      },
      {
        name: "Enrollments",
        path: "/enrollmentLists",
        component: Enrollments,
      },
      {
        name: "Employments",
        path: "/employments",
      },
      {
        name: "Rooms",
        path: "/rooms",
        component: Rooms,
      },
      {
        name: "Sections",
        path: "/sections",
        component: Sections,
      },
      {
        name: "Violations",
        path: "/violations",
        component: Violations,
      },
    ],
  },
];

export default access;
