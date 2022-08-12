const inputSearch = document.querySelector(".search-input");
const labelSearch = document.querySelector(".search-label");
const allCourses = document.querySelector("#all-courses");

export const search = () => {
  inputSearch.addEventListener("keyup", filter);
};

const filter = () => {
  labelSearch.style.display = "none";
  const valueSearch = inputSearch.value.toLowerCase();
  if (valueSearch === "") {
    labelSearch.style.display = "flex";
  }
  const allCoursesArray = Array.from(allCourses.querySelectorAll(".course"));
  allCoursesArray.forEach((item) => {
    const text = item.querySelector("a").innerText;
    const TextLower = text.toLocaleLowerCase();
    if (TextLower.indexOf(valueSearch) > -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
