//const deleteBtn = document.createElement('button');

//actionElement.appendChild(deleteBtn);
//titleElement.addEventListener('click', () => {
// titleElement.classList.toggle('done');
//});
// line.appendChild(actionElement);
// tasksTable.appendChild(line);

//const message = "Bravo, tu es prêt ! ✌️";
//document.getElementById("completed").checked = true;
//document.getElementById("completed") = false;
//document.querySelector(#completed).addEventListener('click',function(event){
// event<.preventDefault();
//return message;
//});
//

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

const todoList = document.querySelector(".todo-container");
const checkedBox = 0;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i] >= 4) {
    alert("Bravo, tu es prêt pour l'aventure ! 🧳 ");
  }
}

/*if (todoList[i].checked === true) {
      checkedBox++;
    }
  }
  if (todoList >= 4) {*/
