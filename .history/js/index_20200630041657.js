const search = document.querySelector(".header__search");
const li = document.querySelector(".drink-list__item");

const searchEngine = (e) => {
  const text = e.target.value;
  console.log(text);
};

search.addEventListener("keyup", searchEngine);
