export const ratingStar = (rating, students) => {
  const totalStar = 5;
  const totalStarFill = parseInt((rating / 10) * 10);
  const div = document.createElement("div");
  div.classList.add("card-rating");
  const mins = totalStar - rating;
  const floatnum = (mins % 1).toFixed(4);

  const totalStarUnFill = parseInt((mins / 10) * 10);
  const spanStar = document.createElement("span");
  const spanPrice = document.createTextNode(rating);
  spanStar.appendChild(spanPrice);
  div.appendChild(spanStar);
  for (let i = 1; i <= totalStarFill; i++) {
    createStar("fa-star", div);
  }
  if (floatnum > 0 && floatnum < 1) {
    createStar("fa-star-half-o", div);
  }
  for (let i = 1; i <= totalStarUnFill; i++) {
    createStar("fa-star-o", div);
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
