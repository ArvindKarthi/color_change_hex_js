//Getting the document elements to change.
const body = document.querySelector("body");
const head = document.querySelector("h2");
const button = document.querySelector(".btn");

//Adding an event to change the hex value when the button is triggered.
button.addEventListener("click", () => {
  let randomValue = Math.random();
  let hex = "#" + randomValue.toString(16).substr(2, 6);
  body.style.backgroundColor = hex;
  head.style.color = hex;
  button.style.backgroundColor = hex;
  head.innerText = `HEX : ${hex}`;
});
