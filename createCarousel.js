export const mainDiv = (item) => {
  const mainDiv = document.createElement("div");
  mainDiv.id = item.slug + 1;
  mainDiv.classList = "carousel slide";
  mainDiv.setAttribute("data-bs-interval", "false");
  mainDiv.setAttribute("data-pause", "hover");
  const prev = createButton("prev", `#${mainDiv.id}`);
  const next = createButton("next", `#${mainDiv.id}`);
  mainDiv.appendChild(prev);
  mainDiv.appendChild(next);
  return mainDiv;
};
export const createInner = () => {
  const carouselInner = document.createElement("div");
  carouselInner.classList = "carousel-inner";
  return carouselInner;
};
export const createItem = () => {
  const carouselItem = document.createElement("div");
  carouselItem.classList = "carousel-item";
  return carouselItem;
};
const createButton = (type, id) => {
  const button = document.createElement("button");
  button.classList = `carousel-control-${type}`;
  button.type = "button";
  button.setAttribute("data-bs-target", id);
  button.setAttribute("data-bs-slide", type);
  let span = document.createElement("span");
  span.classList = `carousel-control-${type}-icon`;
  span.setAttribute("aria-hidden", "true");
  button.appendChild(span);
  span = document.createElement("span");
  span.classList = `visually-hidden`;
  const text = document.createTextNode(type);
  span.appendChild(text);
  button.appendChild(span);
  return button;
};
