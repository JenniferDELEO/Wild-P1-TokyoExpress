const inputValue = document.getElementById("inputEuro");
const result = document.getElementById("result");
const currency = document.querySelector("#currency-yen");
const currentRate = document.getElementById("default-rate");
const rate = 133.04;

inputValue.addEventListener("input", (e) => {
  e.preventDefault();
  const inputInEuro = inputValue.value;
  const resultOfChange = (inputInEuro * rate).toFixed(2);
  result.innerText = resultOfChange;
});

currentRate.innerText = rate;

/* ------------------ TO DO LIST --------------------------- */

const todoList = document.querySelectorAll(".completed");
const message = "Bravo, tu es prêt pour l'aventure ! 🤠 ";

for (let i = 0; i < todoList.length; i++) {
  todoList[i].addEventListener("click", function (event) {
    let allChecked = true;
    for (let y = 0; y < todoList.length; y++) {
      if (!todoList[y].checked) {
        allChecked = false;
      }
    }
    if (allChecked) {
      alert(message);
    }
  });
}
