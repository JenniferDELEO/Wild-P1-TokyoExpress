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