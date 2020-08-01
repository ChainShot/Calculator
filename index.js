import "./index.scss";

function setDisplayValue(value) {
  const valueEl = document.getElementById("value");
  valueEl.innerHTML = value;
}

[0,1,2,3,4,5,6,7,8,9].forEach((number) => {
  document.getElementById(`button-${number}`).addEventListener("click", () => {
    setDisplayValue(number);
  });
});

document.getElementById("clear").addEventListener("click", () => {
  setDisplayValue(0);
});

document.getElementById("add").addEventListener("click", () => {
  // add two numbers!
});

document.getElementById("subtract").addEventListener("click", () => {
  // subtract two numbers!
});

document.getElementById("divide").addEventListener("click", () => {
  // divide two numbers!
});

document.getElementById("multiply").addEventListener("click", () => {
  // multiply two numbers!
});

document.getElementById("button-dot").addEventListener("click", () => {
  // getting fractional, yikes!
});
