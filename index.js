import { createCourse } from "./createCourses.js";
import { search } from "./search.js";
// function fetch data from api
const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/courses`);
  return await response.json();
};

// get element to append courses inside it
const courses = document.querySelector("#all-courses");

if (courses) {
  const coursesData = await fetchData();
  const coursesDataArray = Array.from(coursesData);
  coursesDataArray.forEach((course) => {
    createCourse(course);
  });
  search();
}

