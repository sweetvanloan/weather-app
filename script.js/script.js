/*----- constants -----*/
const $location = $("#location");
const $main = $("#main");
const $forcast = $("#forcast");
const $rain = $("#rain");
const $snow = $("#snow");

/*----- app's state (variables) -----*/
let settings = {
    "async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=london",
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "8e53b3da51msh6944abafc64ea95p1296a2jsnefa44b87d6ad"
	}
}

let weatherData;


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/



$('form').on("submit", handleGetData);

function handleGetData(evt) {
    evt.preventDefault();
    
    $.ajax(settings).done(function (response) {
        url: "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=london"
        console.log(response);
      (data) => {
       weatherData = data;
       render();
    },
    
    (error) => {
        console.log('bad request: ', error);
    }
});
}

function render() {
    $location.html(data.location);
    $main.html(data.main);
    $rain.html(data.rain);
    $snow.html(data.snow);
    
}


