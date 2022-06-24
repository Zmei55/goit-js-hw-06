{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> 
 style="font-size: 20px;"*/
}

const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputValueChange);
console.log(inputEl.siblings);

function onInputValueChange(event) {
  event.currentTarget.max = 50;
  event.currentTarget.min = 10;
  event.currentTarget.step = 1;
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
