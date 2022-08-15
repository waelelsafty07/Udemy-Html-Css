const scroll = document.querySelector("#scroll");
export const scrollNav = () => {
  window.onscroll = () => {
    if (window.scrollY > 450) scroll.classList.add("scroll");
    else scroll.classList.remove("scroll");
  };
};
