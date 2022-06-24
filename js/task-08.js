{
  /* 
  <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
  </div>

  <div id="boxes"></div> */
}
const refs = {
  inputEl: document.querySelector('[type="number"]'),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector("#boxes"),
};

refs.renderBtnEl.addEventListener("click", getAmount);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);
refs.inputEl.addEventListener("focus", onInputFocus);
refs.inputEl.addEventListener("blur", onInputBlur);

function getAmount() {
  const amount = refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const listEl = [];
  const basisSize = 30;
  refs.boxesEl.classList.add("box");

  for (let i = 0; i < amount; i += 1) {
    const size = basisSize + i * 10;
    const divEl = document.createElement("div");
    divEl.style.cssText = `width: ${size}px; height: ${size}px;`;
    divEl.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    divEl.textContent = size;

    listEl.push(divEl);
  }

  refs.boxesEl.append(...listEl);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function onInputFocus() {
  window.addEventListener("keydown", onEnterKeyDown);
}

function onInputBlur() {
  window.removeEventListener("keydown", onEnterKeyDown);
}

function onEnterKeyDown(event) {
  if (event.code === "Enter") {
    getAmount();
  }

  if (event.code === "Escape") {
    destroyBoxes();
  }
}
