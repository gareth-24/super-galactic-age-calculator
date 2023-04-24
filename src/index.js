import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from './js/age-calculator.js';

//UI Logic

function ageCalculator(years)  {
  const newAge = new Age(years);
  newAge.getPlanetaryAge();
  const mercuryAge = newAge.mercuryYears;
  const venusAge = newAge.venusYears;
  const marsAge = newAge.marsYears;
  const jupiterAge = newAge.jupiterYears;
  document.getElementById("mercury-output").innerText = mercuryAge;
  document.getElementById("venus-output").innerText = venusAge;
  document.getElementById("mars-output").innerText = marsAge;
  document.getElementById("jupiter-output").innerText = jupiterAge;
}

function handleSubmitForm(event) {
  event.preventDefault();
  const userAge = document.getElementById("user-age").value;
  ageCalculator(userAge);
}

window.addEventListener("load", function() {
  document.querySelector("#age-calculator-form").addEventListener("submit", handleSubmitForm);
});