const inputSearch = document.querySelector(".search-input");
const buttonSearch = document.querySelector(".search-form .btn");
const labelSearch = document.querySelector(".search-label");
const allCourses = document.querySelector("#all-courses");

export const search = () => {
  inputSearch.addEventListener("keyup", () => {
    const inputSearchValue = inputSearch.value;
    if (inputSearchValue !== "") {
      buttonSearch.style.cursor = "pointer";
      buttonSearch.style.opacity = 1;
    } else {
      buttonSearch.style.cursor = "not-allowed";
      buttonSearch.style.opacity = 0.5;
    }
  });

  buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    filter();
  });
};

const filter = () => {
  const valueSearch = inputSearch.value.toLowerCase();
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
