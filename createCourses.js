import { ratingStar } from "./ratingStar.js";
// get element to append courses inside it
const courses = document.querySelector("#myTabContent");
export const createCourse = ({
  image,
  title,
  author,
  price,
  rating,
  people,
  link,
}) => {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("course");
  // create new div belong to card image
  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  // create new image belong to card image
  const imgTag = document.createElement("img");
  imgTag.classList.add("img");
  imgTag.src = image;

  // append imgTag inside cardImg
  cardImg.appendChild(imgTag);
  // append cardImg inside newDiv
  newDiv.appendChild(cardImg);
  // create new div belong to card title
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");

  // create new h4 belong to card documenttitle
  const h4 = document.createElement("h4");
  // create new a belong to card title
  const a = document.createElement("a");
  a.href = link;
  // create text title
  const contentLink = document.createTextNode(title);
  // append text to a
  a.appendChild(contentLink);
  // append a to h4
  h4.appendChild(a);
  // append h4 to cardTitle
  cardTitle.appendChild(h4);
  // append cardTitle inside newDiv
  newDiv.appendChild(cardTitle);

  // create card-author-xs belong to div courses
  const authors = document.createElement("div");
  authors.classList.add("card-author-xs");
  // create new p belong to card card-author-xs
  const p = document.createElement("p");
  // create text belong to card card-author-xs
  const authorName = document.createTextNode(author);
  // append authorName to p
  p.appendChild(authorName);
  // append p to authors
  authors.appendChild(p);
  // append authors inside newDiv

  newDiv.appendChild(authors);
  // append stars to newDiv
  const ratings = ratingStar(rating, people);
  newDiv.appendChild(ratings);

  const priceSell = document.createElement("div");
  priceSell.classList.add("card-price");
  const span = document.createElement("span");
  const contentSpan = document.createTextNode(`E£${price}`);
  span.appendChild(contentSpan);
  priceSell.appendChild(span);
  newDiv.appendChild(priceSell);

  return newDiv;
};
