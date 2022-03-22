//const message = "Bravo, tu es prêt ! ✌️";
//document.getElementById("completed").checked = true;
//document.getElementById("completed") = false;
//document.querySelector(#completed).addEventListener('click',function(event){
// event.preventDefault();
//return message;
//});

const inputValue = document.getElementById("inputEuro");
const result = document.getElementById("resultYen");
const currency = document.querySelector("#currency-yen");
const currentRate = document.getElementById("default-rate");
const rate = 132.99;

inputValue.addEventListener("input", (e) => {
  e.preventDefault();
  const inputInEuro = inputValue.value;
  const resultOfChange = (inputInEuro * rate) / toFixed(2);
  result.innerText = resultOfChange;
  currency.innerText = "¥";
});

currentRate.innerText = rate;
