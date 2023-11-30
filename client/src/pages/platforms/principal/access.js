import Announcements from "./announcements";
import Courses from "./courses";
import Dashboard from "./dashboard";
import EmploymentLists from "./employmentlists";
import Enrollments from "./enrollments";
// import OrgCharts from "./orgCharts/orgchart";
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
    name: "Resources",
    icon: "boxes",
    path: "/resources",
    children: [
      {
        name: "Courses",
        path: "/courses",
        component: Courses,
      },
      {
        name: "Subjects",
        icon: "book-open",
        path: "/subjects",
        component: Subjects,
      },
      {
        name: "Syllabus",
        path: "/syllabus",
        component: Syllabus,
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
    ],
  },
  {
    name: "Admissions",
    icon: "user-tie",
    path: "/lists",
    children: [
      {
        name: "Enrollment Requirements",
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
    name: "Socials",
    icon: "bullhorn",
    path: "/socials",
    children: [
      {
        name: "Violations",
        path: "/violations",
        component: Violations,
      },
      {
        name: "Announcements",
        path: "/announcements",
        component: Announcements,
      },
    ],
  },
  {
    name: "Org Chart",
    icon: "sitemap",
    path: "/orgCharts",
    // component: OrgCharts,
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
];

export default access;
