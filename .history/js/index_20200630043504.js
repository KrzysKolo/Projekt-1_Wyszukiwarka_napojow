const search = document.querySelector(".header__search");
const li = document.querySelectorAll(".drink-list__item");

const searchEngine = (e) => {
  const text = e.target.value.toLowerCase();
  console.log(text);
  li.forEach((el) => {
    const task = el.textContent;
    if (task.toLowerCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchEngine);
