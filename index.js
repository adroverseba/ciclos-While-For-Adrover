// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
//? actividad 1
let number;
let qty;
let addString = "";

const addValue1 = () => {
  number = parseInt(prompt("Inserte numero que desea sumar a si mismo", "0"));
  qty = prompt("Cuantas veces desea sumar el numero anterior?", "0");

  for (let i = 0; i < qty; i++) {
    number += number;
    addString += `<p>${i + 1} valor: ${number}</p>`;
  }
};

const addNumber = () => {
  document.querySelector("div#valores").innerHTML = addString;
};

//? actividad 2
let text = "";
let newText;

const addValue2 = () => {
  newText = prompt("Ingrese un texto:", "");

  while (newText != "ESC" && newText != "" && newText != null) {
    text += `<p> ${newText} </p>`;
    // alert(text);
    newText = prompt("Ingrese un new texto: ");
  }
};

const showValue = () => {
  document.querySelector("div#text").innerHTML = text;
};

//? actividad 3

let user;
let repeat;
let newGreet = "";

const getName = () => {
  user = prompt("ingresa tu nombre ", "Michael Scofield");
  repeat = prompt("cuantas veces quires que te salude?", 1);

  for (let i = 0; i < repeat; i++) {
    newGreet += `<p>${i + 1}. Hola ${user}, es un placer conocerte</p>`;
  }
};

const greet = () => {
  document.querySelector("div#greedText").innerHTML = newGreet;
};
