import { createCourse } from "./createCourses.js";
import { search } from "./search.js";
import { createTab } from "./createTab.js";

// scrollNav();
// function fetch data from api
const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/tabs`);
  return await response.json();
};

const CoursesGrid = (allCoursesArray) => {
  // Get Courses and use slice to make matrix
  let CourseGrid = [];
  const colGrid = 5;
  for (let i = 0; i < allCoursesArray.length; i += colGrid) {
    CourseGrid.push(allCoursesArray.slice(i, i + colGrid));
  }
  return CourseGrid;
};

// get element to append courses inside it
const courses = document.querySelector("#myTabContent");
if (courses) {
  const myTabData = await fetchData();
  const myTabDataArray = Array.from(myTabData);
  let i = 0;
  let j = 0;
  myTabDataArray.forEach((item) => {
    const { tab, a } = createTab(item);
    if (i === 0) {
      i++;
      tab.classList.add("show");
      tab.classList.add("active");
      a.classList.add("active");
    }
    courses.appendChild(tab);

    const CoursesGridData = CoursesGrid(item.courses);
    CoursesGridData.forEach((course) => {
      const carousal = document.createElement("div");
      carousal.classList.add("carousel-item");
      if (j == 0) {
        carousal.classList.add("active");
        j++;
      }
      course.forEach((el) => {
        const courseDiv = createCourse(el);

        carousal.appendChild(courseDiv);
      });
      tab.appendChild(carousal);
    });
  });

  search();
}

const myCarouselElement = document.querySelector("#myTabContent");
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 50000,
  wrap: false,
});
