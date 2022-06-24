const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsContainer = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;

    return ingredientsItemEl;
  });
};

const items = ingredientsContainer(ingredients);
ingredientsEl.append(...items);
