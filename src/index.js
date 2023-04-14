//UI Logic will go
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from './js/age-calculator.js';

function ageCalculator(years)  {
  const newAge = new Age(years);
  //WIP
}

function handleSubmitForm(event) {
  event.preventDefault();
  // document.getElementById("response").innerText = null;
  const resultsDiv = document.getElementById("results");
  resultsDiv.setAttribute("class") = "hidden";

  const userAge = document.getElementById("user-age").value;
  const mercuryAge = document.getElementById("mercury-output").innerText;
  const venusAge = document.getElementById("venus-output").innerText;
  const marsAge = document.getElementById("mars-output").innerText;
  const jupiterAge = document.getElementById("jupiter-output").innerText;
  ageCalculator(userAge);
  resultsDiv.removeAttribute("class");
}


window.addEventListener("load", function() {
  document.querySelector("#age-calculator-form").addEventListener("submit", handleSubmitForm);
});