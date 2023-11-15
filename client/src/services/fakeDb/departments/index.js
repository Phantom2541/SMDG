import collections from "./collections.json";

const Departments = {
  collections,
  getName: (k) => collections.find(({ key }) => key === k).name,
  getGradeLevels: (k) => collections.find(({ key }) => key === k).gradeLevels,
};

export default Departments;
