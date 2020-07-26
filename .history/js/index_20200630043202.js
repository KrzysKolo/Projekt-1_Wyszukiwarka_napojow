const search = document.querySelector(".header__search");
const li = document.querySelector(".drink-list__item");

const searchEngine = (e) => {
  const text = e.target.value;
  console.log(text);
  li.forEach((el) => {
    const task = el.textContent;
    if (el.task.toLowerase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchEngine);
