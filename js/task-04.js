{
  /*
  <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
  </div>;
  */
}

const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.incrementBtn.addEventListener("click", onIncrement);
refs.decrementBtn.addEventListener("click", onDecrement);

function onIncrement() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}
