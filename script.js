document.querySelector("#cel").addEventListener("click", celTf);

document.querySelector("#far").addEventListener("click", farTc);

document.querySelector("#firstTemp").addEventListener("keyup", convert);

function celTf() {
  if (document.querySelector("#firstTemp").value != "") {
    let firstTemp = parseInt(document.querySelector("#firstTemp").value);
    let newTemp = (firstTemp * 9) / 5 + 32;
    newTemp = Math.round(100 * newTemp) / 100;
    document.querySelector("#newTemp").innerHTML = newTemp + "&#176;";
    document.querySelector("#newTempLabel").innerText = "Fahrenheit: ";
  } else {
    document.querySelector("#newTemp").innerHTML =
      "Please type a number into the starting temerature section";
  }
}

function farTc() {
  if (document.querySelector("#firstTemp").value != "") {
    let firstTemp = parseInt(document.querySelector("#firstTemp").value);
    let newTemp = (firstTemp - 32) * (5 / 9);

    newTemp = Math.round(100 * newTemp) / 100;
    document.querySelector("#newTemp").innerHTML = newTemp + "&#176;";
    document.querySelector("#newTempLabel").innerText = "Celcius: ";
  } else {
    document.querySelector("#newTemp").innerHTML =
      "Please type a number into the starting temerature section";
  }
}

// add event listener for input box and add if statement about if cel is picked, far is picked, or neither is picked and have each one run a specific code

function convert() {
  if (document.getElementById("far").checked) {
    let firstTemp = parseInt(document.querySelector("#firstTemp").value);
    let newTemp = (firstTemp - 32) * (5 / 9);

    newTemp = Math.round(100 * newTemp) / 100;
    document.querySelector("#newTemp").innerHTML = newTemp + "&#176;";
    document.querySelector("#newTempLabel").innerText = "Celcius: ";
  } else if (document.getElementById("cel").checked) {
    let firstTemp = parseInt(document.querySelector("#firstTemp").value);
    let newTemp = (firstTemp * 9) / 5 + 32;
    newTemp = Math.round(100 * newTemp) / 100;
    document.querySelector("#newTemp").innerHTML = newTemp + "&#176;";
    document.querySelector("#newTempLabel").innerText = "Fahrenheit: ";
  } else {
    document.querySelector("#newTemp").innerHTML =
      "Please select a starting temperature unit";
  }
}
