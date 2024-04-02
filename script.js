// Preview button event listener
document.getElementById("btn3").addEventListener("click", btnClicked);

// Event function
function btnClicked() {
  // INPUT
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  // PROCESS
  let color = "rgb(" + r + "," + g + "," + b + ")";
  let code1 = `rgb(${r}, ${g}, ${b})`;

  // OUTPUT
  document.getElementById("colorBox").style.backgroundColor = color;
  document.getElementById("rgb-name").innerHTML = code1;
}

// Black button event listener
document.getElementById("btn1").addEventListener("click", blackButton);

// Event function
let code2 = `rgb(0, 0, 0)`;

function blackButton() {
  document.getElementById("colorBox").style.backgroundColor = "black";
  document.getElementById("rgb-name").innerHTML = code2;
}

// White button event listener
document.getElementById("btn2").addEventListener("click", whiteButton);

// Event function
let code3 = `rgb(255, 255, 255)`;

function whiteButton() {
  document.getElementById("colorBox").style.backgroundColor = "white";
  document.getElementById("rgb-name").innerHTML = code3;
}
