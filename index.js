import { createCourse } from "./createCourses.js";
import { search } from "./search.js";
import { createTab } from "./createTab.js";
import { mainDiv, createInner, createItem } from "./createCarousel.js";
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
  myTabData.forEach((item, index1) => {
    // create tabs
    const { tab, a } = createTab(item);
    if (index1 === 0) {
      tab.classList.add("show");
      tab.classList.add("active");
      a.classList.add("active");
    }
    const mainDivcar = mainDiv(item);
    const carouselInner = createInner();
    let carouselItem = createItem();
    item.courses.forEach((item, index) => {
      const courseDiv = createCourse(item);
      if (index == 0) {
        carouselItem.classList.add("active");
      }
      if (index % 5 == 0 && index > 0) {
        carouselItem.appendChild(courseDiv);
        carouselItem = createItem();
      }
      carouselItem.appendChild(courseDiv);
      carouselInner.appendChild(carouselItem);
    });
    mainDivcar.appendChild(carouselInner);
    tab.appendChild(mainDivcar);
    myTabContent.appendChild(tab);
  });
  search();
};
main();
