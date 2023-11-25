import Dashboard from "./dashboard";
import Announcements from "./announcements";
import Violations from "./violations";
import Enrollment from "./enrollment";
import Tree from "./orgChart";
import Subjects from "./subjects";
import EnrollmentList from "./enrollmentList";
import Requirements from "./requirements";
import Rooms from "./rooms";

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
  {
    name: "Subject",
    icon: "book",
    path: "/subject",
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
];

export default access;
