import Announcements from "./announcements";
import Dashboard from "./dashboard";
import EmploymentLists from "./employmentlists";
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
    name: "Subjects",
    icon: "book-open",
    path: "/subjects",
    component: Subjects,
  },
  {
    name: "Accounts",
    icon: "id-card-alt",
    path: "/accounts",
    children: [
      {
        name: "Employees",
        path: "/employees",
      },
      {
        name: "Students",
        path: "/students",
      },
    ],
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
        component: EmploymentLists,
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
