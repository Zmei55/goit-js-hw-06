{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>; */
}

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", onInputTextLength);

function onInputTextLength(event) {
  event.currentTarget.style.outline = "none";

  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }

  if (
    event.currentTarget.value.length < 6 ||
    event.currentTarget.value.length > 6
  ) {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
