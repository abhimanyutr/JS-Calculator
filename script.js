let result = document.getElementById("result");

function displayScreen(num)
{
    result.value+=num;
    console.log(num);
}

function allClear() {
  result.value = "";
}

function backSpace() {
  result.value = result.value.slice(0, -1);
}

function operation() {
    try {
        let expression = result.value;

        // Replace custom functions with JS Math functions
        expression = expression.replace(/sin\(/g, "Math.sin(Math.PI/180*");
        expression = expression.replace(/cos\(/g, "Math.cos(Math.PI/180*");
        expression = expression.replace(/tan\(/g, "Math.tan(Math.PI/180*");
        expression = expression.replace(/log\(/g, "Math.log("); // natural log
        expression = expression.replace(/√\(/g, "Math.sqrt(");
        expression = expression.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
        let out = Function('"use strict";return (' + expression + ')')();
        result.value = out;
    } catch (e) {
        result.value = "Error";
    }
}

document.addEventListener("DOMContentLoaded", () => {
  let toggleBtn = document.getElementById("toggle-scientific");
  let scientificbtnBox = document.querySelector(".scientific");
  let backbtn = document.querySelector(".scientific .back-btn");

  toggleBtn.addEventListener("click", () => {
    scientificbtnBox.classList.toggle("active");
    toggleBtn.textContent = scientificbtnBox.classList.contains("active")
      ? "Hide Scientific"
      : "Scientific Mode";
  });

  if (backbtn) {
    backbtn.addEventListener("click", () => {
      scientificbtnBox.classList.remove("active");
      toggleBtn.textContent = "Scientific Mode";
    });
  }
});

let lightBtn = document.getElementById("light-mode-btn");
let darkBtn = document.getElementById("dark-mode-btn");

lightBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('https://files.123freevectors.com/wp-content/original/119446-abstract-light-blue-background-graphic-design.jpg')";
  document.querySelector(".calculator").style.background = "#2b2a2aff";
 
  lightBtn.style.display = "none";
  darkBtn.style.display = "inline-block";
});

darkBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('https://files.123freevectors.com/wp-content/original/119446-abstract-light-blue-background-graphic-design.jpg')";
  document.querySelector(".calculator").style.background = "rgb(240, 234, 234)";
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline-block";
});


let fact = () => {
  let number = parseInt(result.value);
  if (isNaN(number) || number < 0) {
    result.value = "Error";
    return;
  }
  if (number > 170) {
    result.value = "Infinity";
    return;
  }
  let x = 1;
  for (let i = 1; i <= number; i++) x *= i;
  result.value = x;
};

let pi = () => result.value = Math.PI;
let log = () => result.value = Math.log(parseFloat(result.value));
let root = () => result.value = Math.sqrt(parseFloat(result.value));
let e = () => result.value = Math.E;

let pow = () => {
  let base = parseFloat(result.value);
  let exponent = prompt("Enter the exponent:");
  if (exponent !== null && !isNaN(exponent)) {
    result.value = Math.pow(base, parseFloat(exponent));
  }
};
