import { createCourse } from "./createCourses.js";
import { search } from "./search.js";
import { scrollNav } from "./scroll.js";

scrollNav();
// function fetch data from api
const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/tabs`);
  return await response.json();
};

// get element to append courses inside it
const courses = document.querySelector("#myTabContent");
const myTab = document.querySelector("#myTab");
const createTab = () => {};
if (courses) {
  const myTabData = await fetchData();
  const myTabDataArray = Array.from(myTabData);
  let i = 0;
  myTabDataArray.forEach((item) => {
    const li = document.createElement("li");
    li.role = "presentation";
    const a = document.createElement("a");
    a.classList = "nav-link";
    a.id = `${item.slug}-tab`;
    a.role = `tab`;

    a.setAttribute("data-bs-toggle", `tab`);
    a.setAttribute("data-bs-target", `#${item.slug}`);
    a.setAttribute("aria-controls", `${item.slug}`);
    a.setAttribute("aria-selected", `true`);
    const aText = document.createTextNode(item.name);
    a.appendChild(aText);
    li.appendChild(a);
    myTab.appendChild(li);
    const tab = document.createElement("div");
    tab.classList.add("tab-pane");
    tab.classList.add("fade");
    tab.id = item.slug;
    tab.role = "tabpanel";
    tab.setAttribute("aria-labelledby", `${item.slug}-tab`);
    if (i === 0) {
      i++;
      tab.classList.add("show");
      tab.classList.add("active");
      a.classList.add("active");
    }
    courses.appendChild(tab);
    item.courses.forEach((course) => {
      tab.appendChild(createCourse(course));
    });
  });

  search();
}
