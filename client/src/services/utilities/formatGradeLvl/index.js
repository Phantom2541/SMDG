import { Departments } from "../../fakeDb";

const formatGradeLvl = (department, id) => {
  const name = Departments.getName(department);

  if (department !== "college") return `${name} ${id}`;

  const level = id - 13;

  const sup = ["st", "nd", "rd"];

  return `${level + 1}${sup[level] || "th"} Year ${name}`;
};

export default formatGradeLvl;
