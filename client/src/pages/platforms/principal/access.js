import Announcements from "./announcements";
import Dashboard from "./dashboard";
import Enrollments from "./enrollments";
import OrgCharts from "./orgCharts/orgchart";
import Requirements from "./requirements";
import Rooms from "./rooms";
import Sections from "./sections";
import Subjects from "./sections";
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
    name: "Enrollment List",
    icon: "tachometer-alt",
    path: "/enrollmentLists",
    component: Enrollments,
  },
  {
    name: "Org Chart",
    icon: "tachometer-alt",
    path: "/orgCharts",
    component: OrgCharts,
  },
  {
    name: "Requirements",
    icon: "tachometer-alt",
    path: "/requirements",
    component: Requirements,
  },
  {
    name: "Rooms",
    icon: "tachometer-alt",
    path: "/rooms",
    component: Rooms,
  },
  {
    name: "Section List",
    icon: "tachometer-alt",
    path: "/sections",
    component: Sections,
  },
  {
    name: "Subject List",
    icon: "tachometer-alt",
    path: "/subjects",
    component: Subjects,
  },
  {
    name: "Lists",
    icon: "list",
    path: "/lists",
    children: [
      {
        name: "Violations",
        icon: "tachometer-alt",
        path: "/violations",
        component: Violations,
      },
    ],
  },
];

export default access;
