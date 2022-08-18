export const ratingStar = (rating, students) => {
  let totalStar = rating * 10;
  const stars = ["fa-star", "fa-star-half-o", "fa-star-o"];
  const div = document.createElement("div");
  div.classList.add("card-rating");
  const spanStar = document.createElement("span");
  const spanRating = document.createTextNode(rating);
  spanStar.appendChild(spanRating);
  div.appendChild(spanStar);
  for (let i = 0; i < 5; i++) {
    let index = totalStar > 8 ? 0 : totalStar > 2 ? 1 : 2;
    createStar(stars[index], div);
    totalStar -= 10;
  }
  const spanStudents = document.createElement("span");
  const spanContent = document.createTextNode(students);
  spanStudents.appendChild(spanContent);
  div.appendChild(spanStudents);
  return div;
};
const createStar = (star, div) => {
  const span = document.createElement("span");
  const icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add(star);
  span.appendChild(icon);
  div.appendChild(span);
};
