// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
refs.input.addEventListener("blur", onInputBlur);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onInputBlur(event) {
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "незнакомец";
  }
}
