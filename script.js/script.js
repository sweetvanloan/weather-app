
/*----- constants -----*/
const $location = $("#location");
const $main = $("#main");
// const $forcast = $("#forcast");
const $rain = $("#rain");
const $snow = $("#snow");
const $input = $("input[type='text']");

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
};

let weatherData, userInput;



/*----- event listeners -----*/

$("form").on("submit", handleGetData);;

/*----- functions -----*/

function handleGetData(evt) {
    evt.preventDefault();
    userInput = $input.val();
   
    
    $.ajax(settings).done(function (response) {
        url: "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=" + userInput
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
    console.log("Here is the data" + data)
    $location.html(weatherData.location);
    $main.html(weatherData.main);
    $rain.html(weatherData.rain);
    $snow.html(weatherData.snow);
    
}


