import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from './js/age-calculator.js';

//UI Logic

function ageCalculator(years)  {
  const newAge = new Age(years);
  const mercuryAge = newAge.mercuryYears;
  const venusAge = newAge.venusYears;
  const marsAge = newAge.marsYears;
  const jupiterAge = newAge.jupiterYears;
  // console.log(mercuryAge);

  document.getElementById("mercury-output").innerText = mercuryAge;
  document.getElementById("venus-output").innerText = venusAge;
  document.getElementById("mars-output").innerText = marsAge;
  document.getElementById("jupiter-output").innerText = jupiterAge;
}

function handleSubmitForm(event) {
  event.preventDefault();
  // document.getElementById("response").innerText = null;
  // const resultsDiv = document.getElementById("results");
  // resultsDiv.setAttribute("class") = "hidden";

  const userAge = document.getElementById("user-age").value;
  // const mercuryAge = document.getElementById("mercury-output").innerText;
  // const venusAge = document.getElementById("venus-output").innerText;
  // const marsAge = document.getElementById("mars-output").innerText;
  // const jupiterAge = document.getElementById("jupiter-output").innerText;
  ageCalculator(userAge);
  // resultsDiv.removeAttribute("class");
}


window.addEventListener("load", function() {
  document.querySelector("#age-calculator-form").addEventListener("submit", handleSubmitForm);
});