// import DND from "../administrator/dnd";
import Announcements from "./socials/announcements";
// import Courses from "./resources/courses";
import Dashboard from "./dashboard";
import EmploymentLists from "./admissions/employments";
import Enrollments from "./admissions/enrollments";
// import OrgCharts from "./orgCharts/orgchart";
import Requirements from "./admissions/requirements";
import Rooms from "./resources/rooms";
import Sections from "./resources/sections";
import Subjects from "./resources/subjects";
import Syllabus from "./resources/syllabus";
import Violations from "./socials/violations";

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
        // component: Courses,
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
