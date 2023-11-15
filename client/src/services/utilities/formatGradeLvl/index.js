import { Departments } from "../../fakeDb";

const { getName } = Departments;

const formatGradeLvl = (department, id) => {
  const name = getName(department);

  if (department !== "college") return `${name} ${id}`;

  const level = id - 13;

  const sup = ["st", "nd", "rd", "th"];

  return `${level + 1}${sup[level]} Year ${name}`;
};

export default formatGradeLvl;
