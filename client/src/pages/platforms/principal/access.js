import Announcements from "./announcements";
import Courses from "./courses";
import Dashboard from "./dashboard";
import EmploymentLists from "./employmentlists";
import Enrollments from "./enrollments";
import OrgCharts from "./orgCharts/orgchart";
import Requirements from "./requirements";
import Rooms from "./rooms";
import Sections from "./sections";
import Subjects from "./subjects";
import Syllabus from "./syllabus";
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
    icon: "bullhorn",
    path: "/announcements",
    component: Announcements,
  },

  {
    name: "Org Chart",
    icon: "sitemap",
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
    name: "Syllabus",
    icon: "clipboard",
    path: "/syllabus",
    component: Syllabus,
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
    name: "Admissions",
    icon: "user-tie",
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
    ],
  },
  {
    name: "Lists",
    icon: "list",
    path: "/lists",
    children: [
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
      {
        name: "Courses",
        path: "/courses",
        component: Courses,
      },
    ],
  },
];

export default access;
