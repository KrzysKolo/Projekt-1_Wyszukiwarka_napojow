 class searchDrink {
  constructor() {
    this.searchInput = null;
        
    this.UiSelectors = {
      
      search: "[data-search]",
      li: ".drink-list__item",
     
    };
  }

  initializeSearchDrink() {

    this.searchInput = document.querySelector(this.UiSelectors.search);
    this.liItem = document.querySelectorAll(this.UiSelectors.li);

    this.addEventListeners();
  }

   addEventListeners() {
      this.searchInput.addEventListener("keyup", () => this.searchD());
   }

  searchD ()  {
    const phrase = this.searchInput.value.toLowerCase();
    console.log(phrase);
    this.liItem.forEach(element => {
      const task = element.textContent;
      console.log(task);
      if (task.toLowerCase().indexOf(phrase) !== -1) {
        element.style.display = "block";
      } 
      else {
         element.style.display = "none" ;
         }
     });
  }
}
