const myTab = document.querySelector("#myTab");

export const createTab = (item) => {
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
  tab.classList = "tab-pane fade carousel-inner";

  tab.id = item.slug;
  tab.role = "tabpanel";
  tab.setAttribute("aria-labelledby", `${item.slug}-tab`);
  return { tab, a };
};
