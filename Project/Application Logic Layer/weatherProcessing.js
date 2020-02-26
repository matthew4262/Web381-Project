var ApiZip = require('../Data Access Layer/weatherAPI').ByZip;
var ApiCoOrd = require('../Data Access Layer/weatherAPI').ByCoOrds;

function GetWeatherByZipCode(zipCode){
    return new Promise((resolve,reject)=>{
        ApiZip.then((data)=>{
            
        })
    })
}

function GetWeatherByCoOrdinates(long, lat){
    return new Promise((resolve,reject)=>{
        ApiCoOrd().then((data)=>{

        })
    })
}