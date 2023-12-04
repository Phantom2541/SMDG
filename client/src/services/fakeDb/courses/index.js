import junior from "./juinor.json";
import senior from "./senior.json";
import college from "./college.json";

const Courses = {
  junior,
  senior,
  college,
  collections: [...junior, ...senior, ...college],
  find: function (pk) {
    return this.collections.find(({ id }) => id === Number(pk));
  },
};

export default Courses;
