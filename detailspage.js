const poiID = parseInt(window.location.search.replace("?id=", ""));
let poiObject = null;
for (let i = 0; i < pointOfInterestList.length; i++ ) {
    const currentPoi = pointOfInterestList[i]; 
    if (currentPoi["id"] === poiID) {
        poiObject = currentPoi 
    }

}
console.log(poiObject);

const titleElement = document.getElementById("title");
titleElement.innerHTML = poiObject.title; 

const corpusElement = document.getElementById("corpus");
corpusElement.innerHTML = poiObject.corpus;

const photoElement = document.getElementById("photoAdresse");
photoElement.src = poiObject.image;


const message =
"Merci pour votre commentaire !";


const contactFormEvent = document.getElementById("contactForm");
contactFormEvent.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(message);
  });

  const textInput = document.getElementById("textInput");
  textInput.addEventListener("input", (event) => {
      console.log(textInput.value)
  })