const body = document.querySelector("body");

let value = 10;
const heading = document.createElement("h1");
heading.innerText = value;

const button = document.createElement("button");
button.innerText = "+";
button.addEventListener("click", () => {
  value = 50;
  console.log(value)
});

body.append(heading);
body.append(button);
console.log(value);
