//const deleteBtn = document.createElement('button');

//actionElement.appendChild(deleteBtn);
//titleElement.addEventListener('click', () => {
   // titleElement.classList.toggle('done');
  //});
 // line.appendChild(actionElement);
 // tasksTable.appendChild(line);

const message = "Bravo, tu es prêt ! ✌️";

document.getElementById("completed").checked = true; 
document.getElementById("completed") = false; 



document.querySelector(#completed).addEventListener('click',function(event){
   event.preventDefault();
return message;
});


Euros < input type='text' Name='Euros' onKeyUp='ConvertirEnYen()' Value='1'>

function ConvertirEnYen() {
if (isNaN(Form1.Euros.value) == true) {
alert('Merci de saisir un nombre.');
Form1.Euros.value = '1';
}
else {
Form1.Yen.value = Form1.Euros.value * 0,0076 ; }
}

Yen <input type ='text' Name='Yen' onKeyUp='ConvertirEnEuros()'>
function ConvertirEnEuros()
{
if (isNaN(Form1.Yen.value) == true) {
alert('Merci de saisir un nombre.');
Form1.Yen.value = Form1.Euros.value * 0,0076;
}
else {
Form1.Euros.value = Form1.Yen.value / 0,0076;
}
}