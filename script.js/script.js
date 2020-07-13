
/*----- constants -----*/
// This code block has been moved into my render function
// const location = $(".location");
// const $main = $("#main");
// // const $forcast = $("#forcast");
// const $rain = $("#rain");
// const $snow = $("#snow");
// const $input = $("input[type='text']");

const input = $("input[type='text']");

/*----- app's state (variables) -----*/

// this is the documentation given by the API, not sure why it is this way...
// TA hours had me move this whole block into my existing AJAX, which got a little confusing 
// let settings = {
//     "async": true,
// 	"crossDomain": true,
// 	"url": "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=london",
// 	"method": "GET",
// 	"headers": {
//         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "8e53b3da51msh6944abafc64ea95p1296a2jsnefa44b87d6ad"
// 	}
// };

let weatherData, userInput;



/*----- event listeners -----*/

$(document).ready(function() {
    $("form").on("submit", handleGetData);
})
/*----- functions -----*/

function handleGetData(evt) {
    evt.preventDefault();
    userInput = input.val();
   


    
       
    
    
    $.ajax( {"async": true,
    "crossDomain": true,
    "url": "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=" + userInput,
    "method": "GET",
    "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "8e53b3da51msh6944abafc64ea95p1296a2jsnefa44b87d6ad"
    }}
    ).done(function(response) {
        // url: "https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=" + userInput
        console.log(response);
        weatherData = response;
        render();

    //   (data) => {
    // },
    
    (error) => {
        console.log('bad request: ', error);
    }
});
}

// TA hours, had me change the syntax to tie my identifiers to the API, but cannot get it off London only. 
function render() {
    console.log(weatherData.list[0].name);
    // console.log("Here is the data" + data)
    // const location = $(".location");
    const location = $(".location");
    const main = $("#main");
    const rain = $("#rain");
    const snow = $("#snow");
    console.log(location)
    location.text(weatherData.list[0].name); //this is now the new syntax that actually works, not quite sure why the [prev. syntax did not work]
    main.text(weatherData.list[0].main.temp);
    rain.text(weatherData.list[0].main.rain);
    snow.text(weatherData.list[0].main.snow);
    
}


