/**
 * <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 */
const createCarousel = (item) => {
  const mainDiv = document.createElement("div");
  mainDiv.id = item.slug + 1;
  mainDiv.classList = "carousel slide";
  mainDiv.setAttribute("data-bs-ride", "carousel");
  const carouselInner = document.createElement("div");
  carouselInner.classList = "carousel-inner";
  const carouselItem = document.createElement("div");
  carouselItem.classList = "carousel-item";
  const prev = createButton("prev", `#${mainDiv.id}`);
  const next = createButton("next", `#${mainDiv.id}`);
  mainDiv.appendChild(prev);
  mainDiv.appendChild(next);
  return { mainDiv, carouselInner, carouselItem };
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
export default createCarousel;
