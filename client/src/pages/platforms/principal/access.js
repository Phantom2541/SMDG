import Announcements from "./announcements";
import Dashboard from "./dashboard";
import Enrollments from "./enrollments";
import OrgCharts from "./orgCharts/orgchart";
import Requirements from "./requirements";
import Rooms from "./rooms";
import Sections from "./sections";
import Subjects from "./subjects";
import Violations from "./violations";

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
    name: "Lists",
    icon: "list",
    path: "/lists",
    children: [
      {
        name: "Violations",
        path: "/violations",
        component: Violations,
      },
      {
        name: "Subject  ",
        path: "/subjects",
        component: Subjects,
      },
      {
        name: "Section",
        path: "/sections",
        component: Sections,
      },
      {
        name: "Rooms",
        path: "/rooms",
        component: Rooms,
      },
      {
        name: "Requirements",
        path: "/requirements",
        component: Requirements,
      },
      {
        name: "Enrollment",
        path: "/enrollmentLists",
        component: Enrollments,
      },
    ],
  },
];

export default access;
