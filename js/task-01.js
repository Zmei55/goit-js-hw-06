const categoriesItemEl = document.querySelectorAll(".item");
console.log("categoriesItemEl", categoriesItemEl);

const countCategories = `В списке ${categoriesItemEl.length} категории.`;
console.log(countCategories);

categoriesItemEl.forEach((item) =>
  console.log(`Категория: ${item.firstElementChild.textContent},
Количество элементов: ${item.lastElementChild.children.length}`)
);
