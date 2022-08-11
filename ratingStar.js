export const ratingStar = (rating, students) => {
  const totalStar = 5;
  const totalStarFill = parseInt((rating / 10) * 10);
  const div = document.createElement("div");
  div.classList.add("card-rating");
  const mins = totalStar - rating;
  const floatnum = (mins % 1).toFixed(4);
  console.log(floatnum);
  const totalStarUnFill = parseInt((mins / 10) * 10);
  //   console.log(totalStarUnFill);
  //   console.log(mins);
  const spanStar = document.createElement("span");
  const spanPrice = document.createTextNode(rating);
  spanStar.appendChild(spanPrice);
  div.appendChild(spanStar);
  for (let i = 1; i <= totalStarFill; i++) {
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-star");
    span.appendChild(icon);
    div.appendChild(span);
  }
  if (floatnum > 0 && floatnum < 1) {
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-star-half-o");
    span.appendChild(icon);
    div.appendChild(span);
  }
  for (let i = 1; i <= totalStarUnFill; i++) {
    const span = document.createElement("span");
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-star-o");
    span.appendChild(icon);
    div.appendChild(span);
  }
  const spanStudents = document.createElement("span");
  const spanContent = document.createTextNode(students);
  spanStudents.appendChild(spanContent);
  div.appendChild(spanStudents);
  return div;
};
