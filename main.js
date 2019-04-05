

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    domString += '<div class="container">'
    domString += '<div class="row">'
    arrayToPrint.forEach((place) => {
        domString += `<div class="col-12 col-md-6 col-lg-4">`;
        domString += '<div class="card">'
            domString += `<img src="${place.cityImage}" class="card-img-top">`;
                domString += `<div class="card-body">`;
                domString += `<h3 class="card-title">${place.cityName}</h4>`;
                domString += `<h4>${place.cityState}</h4>`;
                domString += `<h5>${place.favoriteRestaurant}</h5>`;
                domString += `<h5>${place.favoriteBar}</h5>`;
                domString += `<h5>${place.favoriteHotel}</h5>`;
                domString += `<h5>${place.favoriteTouristAttraction}</h5>`;
                domString += `</div>`;
            domString += `</div>`;    
        domString += `</div>`;  
    });
        domString += `</div>`;
        domString += `</div>`;
        printToDom('faves', domString);
};


function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(data.places);
};


function executeThisCodeifXHRFails(){
    console.error('oh shit');
};

const getPlaceData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeifXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
    console.log(myRequest);

};


const init = () => {
    getPlaceData();
};

init();