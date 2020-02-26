let ApiZip = require('../Data Access Layer/weatherAPI').ByZip;
let ApiCoOrd = require('../Data Access Layer/weatherAPI').ByCoOrds;

module.exports.GetWeatherByZipCode = function GetWeatherByZipCode(zipCode) {
    return new Promise((resolve, reject) => {
        ApiZip(zipCode).then((data) => {
            DegreesToCompass(data['wind']['deg']).then(direction=>{
                let weatherConditions = {
                    id: data['weather']['id'],
                    weather: data['weather']['description'],
                    icon: data['weather']['icon'],
                    curTemp: data['main']['temp'],
                    maxTemp: data['main']['temp_max'],
                    minTemp: data['main']['temp_min'],
                    windSpeed: data['wind']['speed'],
                    windDeg: data['wind']['deg'],
                    windDirection : direction
                };
                resolve(weatherConditions);
            })
        })
    })
}

module.exports.GetWeatherByCoOrdinates = function GetWeatherByCoOrdinates(long, lat) {
    return new Promise((resolve, reject) => {
        ApiCoOrd(long, lat).then((data) => {
            DegreesToCompass(data['wind']['deg']).then(direction=>{
                let weatherConditions = {
                    id: data['weather']['id'],
                    weather: data['weather']['description'],
                    icon: data['weather']['icon'],
                    curTemp: data['main']['temp'],
                    maxTemp: data['main']['temp_max'],
                    minTemp: data['main']['temp_min'],
                    windSpeed: data['wind']['speed'],
                    windDeg: data['wind']['deg'],
                    windDirection : direction
                };
                resolve(weatherConditions);
            })
            
        })
    })
}

function DegreesToCompass(degree) {
    return new Promise((resolve, reject) => {
        var val = (degree / 22.5) + .5;
        var directions = [  "North",
                            "North-North East",
                            "North East",
                            "East-North East",
                            "East",
                            "East-South East",
                            "South East",
                            "South South East",
                            "South",
                            "South-South West",
                            "South West",
                            "West South West",
                            "West",
                            "West-North West",
                            "North West",
                            "North-North West"];
        var index = Math.floor(val % 16);
        resolve(directions[index])
    })
}


