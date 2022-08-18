import { createCourse } from "./createCourses.js";
import { search } from "./search.js";
import { createTab } from "./createTab.js";
import createCarousel from "./createCarousel.js";
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

const myTabContent = document.querySelector("#myTabContent");
const main = async () => {
  // fetch api
  const myTabData = await fetchData();
  let i = 0;
  myTabData.forEach((item) => {
    let j = 0;
    // create tabs
    const { tab, a } = createTab(item);
    if (i === 0) {
      i++;
      tab.classList.add("show");
      tab.classList.add("active");
      a.classList.add("active");
    }
    const { mainDiv, carouselInner } = createCarousel(item);
    const CoursesGridData = CoursesGrid(item.courses);
    CoursesGridData.forEach((course) => {
      const { carouselItem } = createCarousel(item);
      if (j == 0) {
        carouselItem.classList.add("active");
        j++;
      }
      course.forEach((el) => {
        const courseDiv = createCourse(el);
        carouselItem.appendChild(courseDiv);
      });
      carouselInner.appendChild(carouselItem);
    });
    mainDiv.appendChild(carouselInner);
    tab.appendChild(mainDiv);
    myTabContent.appendChild(tab);
  });
  search();
};
main();
